import React from 'react';
import {
  string,
  object,
  func,
  arrayOf,
} from 'prop-types';

import Input from '../Input';
import Results from '../Results';

const Display = ({
  inputPlaceholder,
  onChange,
  selectableKeys,
  onKeyChange,
  data,
  renderItem,
}) => (
  <div>
    <div className="row">
      <Input
        placeholder={inputPlaceholder}
        onChange={onChange}
        selectableKeys={selectableKeys}
        onKeyChange={onKeyChange}
      />
    </div>
    <Results data={data} renderItem={renderItem} selectableKeys={selectableKeys} />
  </div>
);

Display.propTypes = {
  inputPlaceholder: string,
  onChange: func.isRequired,
  selectableKeys: arrayOf(string).isRequired,
  onKeyChange: func.isRequired,
  data: arrayOf(object).isRequired,
  renderItem: func.isRequired,
};

export default Display;
