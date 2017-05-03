import React from 'react';
import ReactMotionFlip from "react-motion-flip"

const Results = ({ data, renderItem }) => (
  <ReactMotionFlip>
    { data.map(renderItem) }
  </ReactMotionFlip>
);

export default Results;


// import React from 'react';
//
//
// const Results = ({ data, renderItem }) => (
//   <div>
//     { data.map(renderItem) }
//   </div>
// );
//
// export default Results;
