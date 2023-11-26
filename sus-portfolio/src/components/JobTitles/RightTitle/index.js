import React from 'react';
import './index.scss';


const RightTitle = ({heading, description, logoimage}) => (
    <div className="WrapperRight">
        <div className="LogoImageL">
            <img src={logoimage} alt="logoimage"/>
        </div>
        <div className="RightTitle">
                <h5>{heading}</h5>
                <h6>{description}</h6>
        </div>
    </div>
);

export default RightTitle;
