import React from 'react';

import Header from './Header';
import FilterInput from './FilterInput';
import Results from './Results';


const FilterDisplay = ({ title, onChange, data, renderItem }) => (
  <div>
    <Header title={title} />
    <FilterInput onChange={onChange} />
    <Results data={data} renderItem={renderItem} />
  </div>
);

export default FilterDisplay;
