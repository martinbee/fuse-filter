import React from 'react';


const FilterInput = (props) => {
  console.log(props);
  const { onChange, placeholder } = props;

  return (
    <input
      placeholder={placeholder}
      className="App-input"
      type="text"
      onChange={onChange}
    />
  );
};

export default FilterInput;
