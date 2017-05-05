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
    resultsLimit: 12,
    showDefaultData: true,
    selectKeys: true,
  };

  static propTypes = {
    data: arrayOf(object).isRequired,
    fuseConfig: (props, propName, componentName) => {
      const { fuseConfig } = props;

      if (!fuseConfig) {
        return new Error(
          `Required prop \`${propName}\` was not specified in \`${componentName}\`.`
        );
      }

      if (!_.isArray(fuseConfig.keys)) {
        return new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. ` +
          `Expected \`${propName}.keys\` to be an array.`
        );
      }
    },
    debounce: number,
    renderItem: func,
    resultsLimit: number,
    showDefaultData: bool,
    inputPlaceholder: string,
    selectKeys: bool,
  };

  state = { filterTerm: '', filteredData: [], fuseConfig: {} };

  componentWillMount() {
    const { showDefaultData, resultsLimit, data, fuseConfig } = this.props;

    if (showDefaultData) this.setFuseFilteredData(this.state.filterTerm, data, resultsLimit);

    this.setState({ fuseConfig });
  }

  componentWillReceiveProps(nextProps) {
    const { data, resultsLimit } = this.props;

    const limitChanged = resultsLimit !== nextProps.displaylimit;
    const dataChanged = !_.isEqual(data, nextProps.data);

    if (limitChanged || dataChanged) {
      this.setFuseFilteredData(this.state.filterTerm, nextProps.data, nextProps.resultsLimit);
    }
  }

  setFuseFilteredData(filterTerm, data, limit) {
    let dataToDisplay;

    if (!filterTerm && this.props.showDefaultData) {
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
    const { debounce, data, resultsLimit } = this.props;

    const filterTerm = evt.target.value;

    _.debounce(() => this.setFuseFilteredData(filterTerm, data, resultsLimit), debounce)();
    this.setState({ filterTerm });
  };

  changeFuseConfigKeys = newKeys => {
    const newFuseConfig = Object.assign({}, this.state.fuseConfig, { keys: newKeys });

    this.setState({ fuseConfig: newFuseConfig });
  };

  render() {
    const { renderItem, inputPlaceholder, selectKeys, fuseConfig } = this.props;

    const filterDisplayProps = {
      renderItem,
      onChange: this.onChange,
      onKeyChange: this.changeFuseConfigKeys,
      data: this.state.filteredData,
      inputPlaceholder,
      selectableKeys: selectKeys ? fuseConfig.keys : [],
    };

    return <FilterDisplay {...filterDisplayProps} />;
  }
}
