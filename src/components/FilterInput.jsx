import React from 'react';
import _ from 'lodash';

import FilterDropdown from './FilterDropdown';

const FilterInput = ({ placeholder, onChange, selectableKeys, onKeyChange }) => {
  const inputProps = {
    placeholder,
    className: 'App-input',
    type: 'text',
    onChange,
  };

  if (_.isEmpty(selectableKeys)) return <input {...inputProps} />;

  const dropdownProps = { selectableKeys, onKeyChange };

  return (
    <div>
      <FilterDropdown {...dropdownProps} />
      <input autoFocus {...inputProps} />
    </div>
  );
};

export default FilterInput;
