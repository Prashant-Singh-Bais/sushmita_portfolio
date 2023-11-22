import React from 'react';
import './index.scss';


const LeftTitle = ({heading, description}) => (
    <div className="WrapperLeft">
            <h5>{heading}</h5>
            <h6>{description}</h6>
    </div>
);

export default LeftTitle;
