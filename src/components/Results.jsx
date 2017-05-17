import React from 'react';
import ReactMotionFlip from 'react-motion-flip';
import {
  arrayOf,
  func,
  object,
  string,
} from 'prop-types';

const Results = ({ data, renderItem, selectableKeys }) => (
  <ReactMotionFlip>
    { data.map((dataItem, index) => renderItem(dataItem, index, selectableKeys)) }
  </ReactMotionFlip>
);

Results.propTypes = {
  data: arrayOf(object),
  renderItem: func,
  selectableKeys: arrayOf(string),
};

export default Results;
