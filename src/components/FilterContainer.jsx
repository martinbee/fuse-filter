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

import FilterDisplay from './FilterDisplay';

class FilterContainer extends Component {
  constructor() {
    super();

    this.state = {
      filterTerm: '',
      filteredData: [],
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    const { displayOptions: { initialData, limit }, data } = this.props;

    if (initialData) this.setState({ filteredData: data.slice(0, limit) });
  }

  componentWillReceiveProps(nextProps) {
    const { data, displayOptions: { limit } } = this.props;

    const nextPropsLimit = _.get(nextProps.displayOptions, 'limit');

    const limitChanged = limit !== nextPropsLimit;
    const dataChanged = !_.isEqual(data, nextProps.data);

    if (limitChanged || dataChanged) {
      this.fuseResults(this.state.filterTerm, nextProps.data, nextPropsLimit);
    }
  }

  onChange(evt) {
    const { debounce, data, displayOptions: { limit } } = this.props;

    const filterTerm = evt.target.value;

    this.setState({ filterTerm });

    _.debounce(() => this.fuseResults(filterTerm, data, limit), debounce)();
  }

  fuseResults(filterTerm, data, limit) {
    const fuse = new Fuse(data, this.props.fuseConfig);
    const filteredData = fuse
      .search(filterTerm)
      .slice(0, limit);

    this.setState({ filteredData });
  }

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

FilterContainer.defaultProps = {
  debounce: 400,
  title: 'Fuse Filter',
  renderItem: (dataItem) => {
    const dataKey = Object.keys(dataItem)[0];
    const dataValue = dataItem[dataKey];

    return <div key={dataValue}>{dataValue}</div>;
  },
  displayOptions: {
    limit: 9,
    initialData: false,
  },
};

FilterContainer.propTypes = {
  debounce: number,
  title: string,
  data: arrayOf(object).isRequired,
  fuseConfig: object.isRequired,
  renderItem: func,
  displayOptions: shape({
    limit: number,
    initialData: bool,
  }),
};

export default FilterContainer;
