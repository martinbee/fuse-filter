import React from 'react';

import FilterInput from './FilterInput';
import Results from './Results';


const FilterDisplay = ({
  onChange,
  data,
  renderItem,
  dropdownKeys,
  placeholder,
  onKeyChange,
}) => (
  <div>
    <div className="row">
      <FilterInput
        onChange={onChange}
        onKeyChange={onKeyChange}
        dropdownKeys={dropdownKeys}
        placeholder={placeholder}
      />
    </div>
    <Results data={data} renderItem={renderItem} />
  </div>
);

export default FilterDisplay;
