import React from 'react';


const FilterInput = (props) => {
  console.log(props);

  return (
    <input type="text" onChange={props.onChange} />
  );
}

export default FilterInput;
