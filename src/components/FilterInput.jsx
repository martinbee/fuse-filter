import React from 'react';
import { isEmpty } from 'lodash';

import FilterDropdown from './FilterDropdown';


const FilterInput = ({ placeholder, onChange, selectableKeys, onKeyChange }) => {
  const inputProps = {
    type: 'text',
    className: 'App-input',
    placeholder,
    onChange,
  };

  if (isEmpty(selectableKeys)) return <input {...inputProps} />;

  const dropdownProps = { selectableKeys, onKeyChange };

  return (
    <div>
      <FilterDropdown {...dropdownProps} />
      <input {...inputProps} />
    </div>
  );
};

export default FilterInput;
