import React from 'react';
import _ from 'lodash';

import FilterDropdown from './FilterDropdown';

const FilterInput = ({ placeholder, onChange, dropdownKeys, onKeyChange }) => {
  const inputProps = {
    placeholder,
    className: 'App-input',
    type: 'text',
    onChange,
  };

  if (_.isEmpty(dropdownKeys)) return <input {...inputProps} />;

  const dropdownProps = { dropdownKeys, onKeyChange };

  return (
    <div>
      <FilterDropdown {...dropdownProps} />
      <input {...inputProps} />
    </div>
  );
};

export default FilterInput;
