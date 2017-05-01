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
  shape,
} from 'prop-types';

import Header from './Header';
import FilterInput from './FilterInput';
import Results from './Results';

class FilterContainer extends PureComponent {
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
    if (_.isEqual(nextProps.data, this.props.data)) this.fuseResults(this.state.filterTerm);
  }

  onChange(evt) {
    const filterTerm = evt.target.value;

    this.setState({ filterTerm });

    _.debounce(() => this.fuseResults(filterTerm), this.props.debounce)();
  }

  fuseResults(filterTerm) {
    const { data, fuseConfig, displayOptions: { limit } } = this.props;

    const fuse = new Fuse(data, fuseConfig);
    const filteredData = fuse
      .search(filterTerm)
      .slice(0, limit);

    this.setState({ filteredData });
  }

  render() {
    const { title, renderItem } = this.props;
    console.log(this.props.data.length);

    return (
      <div>
        <Header title={title} />
        <FilterInput onChange={this.onChange} />
        <Results data={this.state.filteredData} renderItem={renderItem} />
      </div>
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
