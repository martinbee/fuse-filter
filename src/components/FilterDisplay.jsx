import React from 'react';

import Header from './Header';
import FilterInput from './FilterInput';
import Results from './Results';


const FilterDisplay = ({ title, onChange, data, renderItem, selectFieldsDropdownKeys }) => (
  <div>
    <Header title={title} />
    <FilterInput onChange={onChange} selectFieldsDropdownKeys={selectFieldsDropdownKeys} />
    <Results data={data} renderItem={renderItem} />
  </div>
);

export default FilterDisplay;
