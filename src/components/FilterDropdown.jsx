import React, { PureComponent } from 'react';
import {
  string,
  func,
  arrayOf,
} from 'prop-types';
import { startCase, isEmpty } from 'lodash';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class FilterDropdown extends PureComponent {
  static propTypes = {
    selectableKeys: arrayOf(string).isRequired,
    onKeyChange: func.isRequired,
  };

  state = { selectedKey: { label: 'All', value: 'all' } };

  onChange = (selectedKey) => {
    const { onKeyChange, selectableKeys } = this.props;

    if (selectedKey.value === 'all') {
      onKeyChange(selectableKeys);
    } else {
      onKeyChange([selectedKey.value]);
    }

    this.setState({ selectedKey: !isEmpty(selectedKey) ? selectedKey : '' });
  }

  getOptions() {
    return this.props.selectableKeys
      .map(key => ({ label: startCase(key), value: key }))
      .concat({ label: 'All', value: 'all' });
  }

  render() {
    const options = this.getOptions();

    const selectProps = {
      placeholder: 'Search By',
      options,
      value: this.state.selectedKey,
      onChange: this.onChange,
      noResultsText: 'No Match Found',
      clearable: false,
    };

    return <Select {...selectProps} />;
  }
}
