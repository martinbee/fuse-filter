import React from 'react';
import ReactMotionFlip from 'react-motion-flip';


const Results = ({ data, renderItem }) => (
  <ReactMotionFlip>
    { data.map(renderItem) }
  </ReactMotionFlip>
);

export default Results;
