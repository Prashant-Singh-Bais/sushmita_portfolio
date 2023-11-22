import React from 'react';
import './index.scss';
import DownArrow from '../../assets/Arrow_image.png'
import StLines from '../Shapes/StLines'
import LeftTitle from '../JobTitles/LeftTitle'
import RightTitle from '../JobTitles/RightTitle'


const Text = () => (
    <div className="Text">

        <div className="textboxA">
            <h1>Namaste! I’m Sushmita</h1>
        </div>

        <div className="textboxB">
            <h2>Product Manager + UX designer shipping innovative solutions anchored in user research and systems thinking.</h2>
        </div> 

        <div className="textboxC">
            <h3 className="B1">MS in Strategic Design & Management, Parsons School of Design, New York</h3>
            <h3 className="B2">ILLUSTRATOR & MULTI-MEDIA ARTIST</h3>
            <h3 className="B3">DOMAIN EXPERTISE IN LEARNING & EDUCATION</h3>
        </div>

        <div className='Downarrow'>
            <img src= {DownArrow} alt="Down Arrow"/>
        </div>

        <div className="textboxD">
            <h4>Industry experience</h4>
        </div>

        <StLines/>
        <RightTitle heading="Senior Interaction Designer" description="Learning & Education   |   Health   |   Gen AI"/>
        <StLines/>
        <LeftTitle heading="Design Product Manager  ‘21" description="Education technology   |   Learning & Personalisation"/>
        <StLines/>
        <LeftTitle heading="Product Manager  ‘19" description="Education technology   |   Start-up 0 to 1"/>
        <StLines/>
        <RightTitle heading="Strategic Designer  ‘22" description="Summer internship   |    Workshop design    |    Futuring"/>
        <StLines/>
        <RightTitle heading="Strategic Designer  ‘22" description="Parsons integrative studio   |    gen z    |    MEDIa + TECH"/>
        <StLines/>
    </div>
);

export default Text;
