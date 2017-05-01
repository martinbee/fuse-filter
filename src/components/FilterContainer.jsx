import React, { Component } from 'react';
import Fuse from 'fuse.js';
import _ from 'lodash';
import {
  number,
  string,
  bool,
  object,
  func,
  arrayOf,
  shape,
} from 'prop-types';

import DefaultCard from './cards/DefaultCard';
import FilterDisplay from './FilterDisplay';

export default class FilterContainer extends Component {
  static defaultProps = {
    debounce: 400,
    title: 'Fuse Filter',
    renderItem: DefaultCard,
    displayOptions: {
      limit: 12,
      showBlankStateData: true,
    },
  };

  static propTypes = {
    debounce: number,
    title: string,
    data: arrayOf(object).isRequired,
    fuseConfig: object.isRequired,
    renderItem: func,
    displayOptions: shape({
      limit: number,
      showBlankStateData: bool,
    }),
  };

  state = { filterTerm: '', filteredData: [] };

  componentWillMount() {
    const { displayOptions: { showBlankStateData, limit }, data } = this.props;

    if (showBlankStateData) this.setFuseFilteredData(this.state.filterTerm, data, limit);
  }

  componentWillReceiveProps(nextProps) {
    const { data, displayOptions: { limit } } = this.props;

    const nextPropsLimit = _.get(nextProps.displayOptions, 'limit');
    const limitChanged = limit !== nextPropsLimit;
    const dataChanged = !_.isEqual(data, nextProps.data);

    if (limitChanged || dataChanged) {
      this.setFuseFilteredData(this.state.filterTerm, nextProps.data, nextPropsLimit);
    }
  }

  setFuseFilteredData(filterTerm, data, limit) {
    const { fuseConfig, displayOptions: { showBlankStateData } } = this.props;

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
    const { debounce, data, displayOptions: { limit } } = this.props;

    const filterTerm = evt.target.value;

    _.debounce(() => this.setFuseFilteredData(filterTerm, data, limit), debounce)();

    this.setState({ filterTerm });
  };

  render() {
    const { title, renderItem } = this.props;

    return (
      <FilterDisplay
        title={title}
        onChange={this.onChange}
        data={this.state.filteredData}
        renderItem={renderItem}
      />
    );
  }
}
