import React from 'react';


const Results = ({ data, renderItem }) => (
  <div>
    { data.map(renderItem) }
  </div>
);

export default Results;
