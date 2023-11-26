import React from 'react';
import './index.scss';


const LeftTitle = ({heading, description, logoimage}) => (
    <div className="WrapperLeft">
        <div className="LeftTitle">
                <h5>{heading}</h5>
                <h6>{description}</h6>
        </div>
        <div className="LogoImageR">
                <img src={logoimage} alt="logoimage"/>
        </div>
    </div>
);

export default LeftTitle;
