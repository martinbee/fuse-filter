import React from 'react';

import Header from './Header';
import FilterInput from './FilterInput';
import Results from './Results';


const FilterDisplay = ({ title, onChange, data, renderItem }) => (
  <div>
    <div className="row"><FilterInput onChange={onChange} /></div>
    <Results data={data} renderItem={renderItem} />
  </div>
);

export default FilterDisplay;


  //<Header title={title} />
