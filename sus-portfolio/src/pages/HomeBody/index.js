import React from 'react';
import './index.scss';
import DownArrow from '../../assets/Arrow_image.png'
import IDEO_logo from '../../assets/IDEO_logo.png'
import Byjus_logo from '../../assets/Byjus_logo.png'
import ThinkPlace_logo from '../../assets/ThinkPlace_logo.png'
import VICE_logo from '../../assets/vice_logo.png'
import face from '../../assets/face.svg'
import aristotle_logo from '../../assets/aristotle_logo.png'
import Dummy_GIF from '../../assets/DummyGIF.jpg'
import StLines from '../../components/Shapes/StLines'
import LeftTitle from '../../components/JobTitles/LeftTitle'
import RightTitle from '../../components/JobTitles/RightTitle'
import TextBox from '../../components/Textbox';
import {Text1, Text2, Text3, Text4} from '../../components/Text';
import Accordion from '../../components/Accordion';



const HomeBody = () => (
    <div className="Text">
        <img src={face} alt = "face"/>
        <div className="textboxA">
            <Text1 inputText = "Namaste! I’m Sushmita   "/>
            <div className='smallline'>
                <svg xmlns="http://www.w3.org/2000/svg" width="301" height="2" fill="none">
                <path d="M0 1H301" stroke="black"/>
                </svg>
            </div>
        </div>
        <div className="textboxB">
            <Text2 inputText = "Product Manager + UX designer shipping innovative solutions anchored in user research and systems thinking."/>
        </div> 

        <div className="textboxC">
            <div className="B1"><Text3 inputText = "MS in Strategic Design & Management, Parsons School of Design, New York"/></div>
            <div className="B2"><Text3 inputText = "ILLUSTRATOR & MULTI-MEDIA ARTIST"/></div>
            <div className="B3"><Text3 inputText = "DOMAIN EXPERTISE IN LEARNING & EDUCATION"/></div>
        </div>

        <div className='Downarrow'>
            <img src= {DownArrow} alt="Down Arrow"/>
        </div>

        <div className="textboxD">
            <Text4 inputText = "Industry experience"/>
            <StLines className='line'/>
        </div>

        
        <Accordion 
        title={
        <RightTitle heading="Senior Interaction Designer" description="Learning & Education   |   Health   |   Gen AI" logoimage={IDEO_logo} />
        }>
            <div className="Box1">
                <TextBox heading="Reimagining the Diabetic Patient Experience" 
                        subheadingBold = "UX design" 
                        subheading=" to reposition a global healthcare giant with enhanced patient-centric features and user flows"
                        linkPage={"/searchqna"}
                        GIFPath = {Dummy_GIF}
                        />
            </div>
            <div className='Box2'>
                <TextBox 
                        heading="Public Health Design Research" 
                        subheadingBold = "Service Design" 
                        subheading=" to promote early dementia detection in partnership with the Public Health Dept & State University."
                        linkPage={"/searchqna"}
                        GIFPath = {Dummy_GIF}
                        />
                <TextBox
                heading="The Student Writing Experience" 
                        subheadingBold = "Strategy + UX design" 
                        subheading=" to test and launch newly conceptualized Gen AI based writing features, with a focus on learner inclusivity."
                        linkPage={"/searchqna"}
                        GIFPath = {Dummy_GIF}
                        />
            </div>
        </Accordion>
        {/* <StLines/> */}
        <Accordion title={<LeftTitle heading="Design Product Manager  ‘21" description="Education technology   |   Learning & Personalisation" logoimage={Byjus_logo}/>}>
            <div className="Box3">
                <TextBox heading="Search Q&A Feature definition + UX Design " 
                        subheadingBold = "From PRD to test & launch" 
                        subheading=" in 6 months"
                        linkPage={"/searchqna"}
                        GIFPath = {Dummy_GIF}
                        />
            </div>
            <div className="Box4">
                <TextBox heading="Distractors Feature definition + UX Design" 
                        subheadingBold = "Pedagogy + Strategy" 
                        subheading=" to track and improve learning outcomes"
                        linkPage={"/searchqna"}
                        GIFPath = {Dummy_GIF}
                        />
            </div>
        </Accordion>
        
        
        {/* <StLines/> */}
        <Accordion 
        title={
        <LeftTitle heading="Product Manager  ‘19" description="Education technology   |   Start-up 0 to 1" logoimage={aristotle_logo}/>
        }>
            <div className='Box5'>
            <TextBox 
                    heading="Market Study + Product Strategy" 
                    subheadingBold = "b2b -> b2c journey" 
                    subheading=""
                    linkPage={"/da_strategy"}
                    GIFPath = {Dummy_GIF}
                    />
            <TextBox
            heading="Product UX Design + Management" 
                    subheadingBold = "Design -> Launch journey" 
                    subheading=""
                    linkPage={"/searchqna"}
                    GIFPath = {Dummy_GIF}
                    />
            </div>
        </Accordion>
        
        {/* <StLines/> */}
        <Accordion 
        title={
        <RightTitle heading="Strategic Designer  ‘22" description="Summer internship   |    Workshop design    |    Futuring" logoimage={ThinkPlace_logo}/>
        }>
            <div className="Box6">
                <TextBox heading="Co-designing the Future of Volunteering in Australia" 
                        subheadingBold = "" 
                        subheading=""
                        linkPage={"/searchqna"}
                        GIFPath = {Dummy_GIF}
                        />
            </div>
        </Accordion>
        {/* <StLines/> */}
        <Accordion 
        title={
        <RightTitle heading="Strategic Designer  ‘22" description="Parsons integrative studio   |    gen z    |    MEDIa + TECH" logoimage={VICE_logo}/>
        }>
            <div className="Box7">
                <TextBox heading="Repositioning Vice as the pioneer of Social ‘Impact’ Media" 
                        subheadingBold = "UX Research + Brand Strategy" 
                        subheading=" leading to a multi-channel campaign design."
                        linkPage={"/VICE"}
                        GIFPath = {Dummy_GIF}
                        />
            </div>
        </Accordion>
        {/* <StLines/> */}
    </div>
);

export default HomeBody;
