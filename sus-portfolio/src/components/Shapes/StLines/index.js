import './index.scss';
import React from 'react';

const StLine = ({ element_color = "#000" }) => {

  return(
  <div className="line"
        style= {{backgroundColor:element_color, width: '100%'}}
  ></div>
)};

export default StLine;


