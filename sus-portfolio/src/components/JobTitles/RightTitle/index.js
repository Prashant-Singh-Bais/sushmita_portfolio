import React from 'react';
import './index.scss';


const RightTitle = ({heading, description}) => (
    <div className="parentContainer">
        <div className="WrapperRight">
                <h5>{heading}</h5>
                <h6>{description}</h6>
        </div>
    </div>
);

export default RightTitle;
