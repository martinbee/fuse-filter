import React, { PureComponent } from 'react';
import _ from 'lodash';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// options in state???
export default class FilterDropdown extends PureComponent {
  state = { selectedValues: [] };

  componentWillMount() {
    this.setState({ selectedKeys: this.getOptions() });
  }

  getOptions() {
    return this.props.dropdownKeys.map(key => ({ label: _.startCase(key), value: key }));
  }

  onChange = selectedKeys => {
    this.setState({ selectedKeys });

    this.props.onKeyChange(selectedKeys.map(key => key.value));
  }

  render() {
    const options = this.getOptions();

    const selectProps = {
      placeholder: 'Search by',
      options,
      value: this.state.selectedKeys,
      onChange: this.onChange,
      multi: true,
    };

    return <Select {...selectProps} />;
  }
};
