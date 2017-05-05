import React, { PureComponent } from 'react';
import { startCase } from 'lodash';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class FilterDropdown extends PureComponent {
  state = { selectedValues: [] };

  componentWillMount() {
    this.setState({ selectedKeys: this.getOptions() });
  }

  onChange = selectedKeys => {
    this.setState({ selectedKeys });

    this.props.onKeyChange(selectedKeys.map(key => key.value));
  }

  getOptions() {
    return this.props.selectableKeys
      .map(key => ({ label: startCase(key), value: key }));
  }

  render() {
    const options = this.getOptions();

    const selectProps = {
      multi: true,
      placeholder: 'Search by',
      options,
      value: this.state.selectedKeys,
      onChange: this.onChange,
    };

    return <Select {...selectProps} />;
  }
}
