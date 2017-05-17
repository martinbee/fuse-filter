import React from 'react';
import {
  string,
  object,
  func,
  arrayOf,
} from 'prop-types';

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
  <div className="container-fluid">
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

FilterDisplay.propTypes = {
  inputPlaceholder: string,
  onChange: func.isRequired,
  selectableKeys: arrayOf(string).isRequired,
  onKeyChange: func.isRequired,
  data: arrayOf(object).isRequired,
  renderItem: func.isRequired,
};

export default FilterDisplay;
