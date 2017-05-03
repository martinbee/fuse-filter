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
  oneOfType,
} from 'prop-types';

import DefaultCard from './cards/DefaultCard';
import FilterDisplay from './FilterDisplay';


export default class FilterContainer extends PureComponent {
  static defaultProps = {
    debounce: 400,
    title: 'Fuse Filter',
    renderItem: DefaultCard,
    displayLimit: 12,
    showBlankStateData: true,
    selectFieldsDropdown: false,
  };

  static propTypes = {
    debounce: number,
    title: string,
    data: arrayOf(object).isRequired,
    fuseConfig: object.isRequired,
    renderItem: func,
    displayLimit: number,
    showBlankStateData: bool,
    selectFieldsDropdown: oneOfType([ bool, arrayOf(string) ]),
  };

  state = { filterTerm: '', filteredData: [] };

  componentWillMount() {
    const { showBlankStateData, displayLimit, data } = this.props;

    if (showBlankStateData) this.setFuseFilteredData(this.state.filterTerm, data, displayLimit);
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
    const { data, selectFieldsDropdown } = this.props;

    if (Array.isArray(selectFieldsDropdown)) return selectFieldsDropdown;

    return Object.keys(data[0]);
  }

  setFuseFilteredData(filterTerm, data, limit) {
    const { fuseConfig, showBlankStateData } = this.props;

    let dataToDisplay;

    if (!filterTerm && showBlankStateData) {
      dataToDisplay = data;
    } else {
      const fuse = new Fuse(data, fuseConfig);

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

  render() {
    const { title, renderItem, selectFieldsDropdown } = this.props;

    const filterDisplayProps = {
      title,
      renderItem,
      onChange: this.onChange,
      data: this.state.filteredData,
    };

    console.log(this.props);
    if (selectFieldsDropdown) {
      filterDisplayProps.selectFieldsDropdownKeys = this.getSelectFieldsDropdownKeys();
    }

    return <FilterDisplay {...filterDisplayProps} />;
  }
}
