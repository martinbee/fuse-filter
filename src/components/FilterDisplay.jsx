import React from 'react';

import FilterInput from './FilterInput';
import Results from './Results';


const FilterDisplay = ({
  inputPlaceholder,
  onChange,
  selectableKeys,
  onKeyChange,
  data,
  renderItem,
}) => (
  <div>
    <div className="row">
      <FilterInput
        placeholder={inputPlaceholder}
        onChange={onChange}
        selectableKeys={selectableKeys}
        onKeyChange={onKeyChange}
      />
    </div>
    <Results data={data} renderItem={renderItem} selectableKeys={selectableKeys} />
  </div>
);

export default FilterDisplay;
