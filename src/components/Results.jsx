import React from 'react';
import ReactMotionFlip from 'react-motion-flip';


const Results = ({ data, renderItem, selectableKeys }) => (
  <ReactMotionFlip>
    { data.map((dataItem, index) => renderItem(dataItem, index, selectableKeys)) }
  </ReactMotionFlip>
);

export default Results;
