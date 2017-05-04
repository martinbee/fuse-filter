import React, { PureComponent } from 'react';
import Fuse from 'fuse.js';
import _ from 'lodash';
import {
  number,
  string,
  bool,
  object,
  func,
  arrayOf,
} from 'prop-types';

import DefaultCard from './cards/DefaultCard';
import FilterDisplay from './FilterDisplay';


export default class FilterContainer extends PureComponent {
  static defaultProps = {
    debounce: 400,
    renderItem: DefaultCard,
    displayLimit: 12,
    showBlankStateData: true,
    selectFieldsDropdown: true,
  };

  static propTypes = {
    debounce: number,
    data: arrayOf(object).isRequired,
    fuseConfig: object.isRequired,
    renderItem: func,
    displayLimit: number,
    showBlankStateData: bool,
    selectFieldsDropdown: bool,
    selectFieldsDropdownKeys: arrayOf(string),
    placeholder: string,
  };

  state = { filterTerm: '', filteredData: [], fuseConfig: {} };

  componentWillMount() {
    const { showBlankStateData, displayLimit, data, fuseConfig } = this.props;

    if (showBlankStateData) this.setFuseFilteredData(this.state.filterTerm, data, displayLimit);

    this.setState({ fuseConfig });
  }

  componentWillReceiveProps(nextProps) {
    const { data, displayLimit } = this.props;

    const limitChanged = displayLimit !== nextProps.displaylimit;
    const dataChanged = !_.isEqual(data, nextProps.data);

    if (limitChanged || dataChanged) {
      this.setFuseFilteredData(this.state.filterTerm, nextProps.data, nextProps.displayLimit);
    }
  }

  getSelectFieldsDropdownKeys() {
    const { data, selectFieldsDropdown, selectFieldsDropdownKeys } = this.props;

    if (!selectFieldsDropdown) return [];

    return selectFieldsDropdownKeys || Object.keys(data[0]);
  }

  setFuseFilteredData(filterTerm, data, limit) {
    let dataToDisplay;

    if (!filterTerm && this.props.showBlankStateData) {
      dataToDisplay = data;

    } else if (!filterTerm) {
      dataToDisplay = [];

    } else {
      const fuse = new Fuse(data, this.state.fuseConfig);

      dataToDisplay = fuse.search(filterTerm);
    }

    this.setState({ filteredData: dataToDisplay.slice(0, limit) });
  }

  onChange = (evt) => {
    const { debounce, data, displayLimit } = this.props;

    const filterTerm = evt.target.value;

    _.debounce(() => this.setFuseFilteredData(filterTerm, data, displayLimit), debounce)();
    this.setState({ filterTerm });
  };

  changeFuseConfigKeys = newKeys => {
    const newFuseConfig = Object.assign({}, this.state.fuseConfig, { keys: newKeys });

    this.setState({ fuseConfig: newFuseConfig });
  };

  render() {
    const { renderItem, placeholder } = this.props;

    const filterDisplayProps = {
      renderItem,
      onChange: this.onChange,
      onKeyChange: this.changeFuseConfigKeys,
      data: this.state.filteredData,
      placeholder,
      dropdownKeys: this.getSelectFieldsDropdownKeys(),
    };

    return <FilterDisplay {...filterDisplayProps} />;
  }
}
