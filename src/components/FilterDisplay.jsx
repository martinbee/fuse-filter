import React from 'react';

import FilterInput from './FilterInput';
import Results from './Results';


const FilterDisplay = ({ onChange, data, renderItem, selectFieldsDropdownKeys }) => (
  <div>
    <div className="row">
      <FilterInput onChange={onChange} selectFieldsDropdownKeys={selectFieldsDropdownKeys} />
    </div>
    <Results data={data} renderItem={renderItem} />
  </div>
);

export default FilterDisplay;
