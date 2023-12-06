import React from 'react';
import './index.scss';

const StLine = ({ type = 'dark' }) => (
  <div className={`line ${type === 'dark' ? 'dark-line' : type === 'light' ? 'light-line' : 'green-line'}`}></div>
);

export default StLine;


