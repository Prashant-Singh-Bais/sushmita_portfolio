import React from 'react';
import './index.scss';

const StLine = ({ type = 'light' }) => (
  <div className={`line ${type === 'light' ? 'dark-line' : type === 'dark' ? 'light-line' : 'green-line'}`}></div>
);

export default StLine;


