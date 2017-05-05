import React from 'react';

import FilterInput from './FilterInput';
import Results from './Results';


const FilterDisplay = ({
  onChange,
  data,
  renderItem,
  selectableKeys,
  inputPlaceholder,
  onKeyChange,
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
    <Results data={data} renderItem={renderItem} />
  </div>
);

export default FilterDisplay;
