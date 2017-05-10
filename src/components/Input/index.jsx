import React from 'react';
import { isEmpty } from 'lodash';
import {
  string,
  func,
  arrayOf,
} from 'prop-types';

import Dropdown from '../Dropdown';

const Input = ({ placeholder, onChange, selectableKeys, onKeyChange }) => {
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
      <Dropdown {...dropdownProps} />
      <input {...inputProps} />
    </div>
  );
};

Input.propTypes = {
  placeholder: string,
  onChange: func.isRequired,
  selectableKeys: arrayOf(string).isRequired,
  onKeyChange: func.isRequired,
};

export default Input;
