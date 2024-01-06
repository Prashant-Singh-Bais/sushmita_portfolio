import React from 'react';
import './index.scss';
import DownArrow from '../../assets/Arrow_image.svg'
import IDEO_logo from '../../assets/IDEO_logo.svg'
import Byjus_logo from '../../assets/Byjus_logo.svg'
import ThinkPlace_logo from '../../assets/ThinkPlace_logo.svg'
import VICE_logo from '../../assets/vice_logo.svg'
import face from '../../assets/face.svg'
import aristotle_logo from '../../assets/aristotle_logo.png'
import StLines from '../../components/Shapes/StLines'
import LeftTitle from '../../components/JobTitles/LeftTitle'
import RightTitle from '../../components/JobTitles/RightTitle'
import TextBox from '../../components/Textbox';
import {Text1, Text2, Text3, Text4} from '../../components/Text';
import Accordion from '../../components/Accordion';
import QnaAnimation from '../../components/Animation/qna';
import DisAnimation from '../../components/Animation/dis';
import AriMarketAnimation from '../../components/Animation/ari_m';
import AriProductAnimation from '../../components/Animation/ari_p';
import ideo_people_img from '../../assets/animation/ideo_people.webp'
import board_img from '../../assets/animation/board.webp'
import computer_img from '../../assets/animation/computer.webp'
import poster_gif from '../../assets/VICE/img_49.gif'
import ideo1 from '../../assets/animation/ideo1.webp'
import ideo2 from '../../assets/animation/ideo2.gif'
import ideo3 from '../../assets/animation/ideo3.gif'

import ScrollChecker from './scrollBehaviour';


const HomeBody = () => {
    const ideoAnimation1 = () => {return(<img src = {ideo1} alt='ideo1'/>)};
    const ideoAnimation2 = () => {return(<img src = {ideo2} alt='ideo2'/>)};
    const ideoAnimation3 = () => {return(<img src = {ideo3} alt='ideo3'/>)};
    return(
    <div className="homebody">
        
        <div className="textboxA">
            <Text1 inputText = "Namaste! I’m Sushmita   "/>
            <div className='face'>
                <img src={face} alt = "face"/>
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
        <RightTitle heading="Senior Interaction Designer '23" description="Learning & Education   |   Health   |   Gen AI" logoimage={IDEO_logo} />
        }>
            <div className="Box1">
                <TextBox heading="Reimagining the Diabetic Patient Experience" 
                        subheadingBold = "UX design" 
                        subheading=" to reposition a global healthcare giant with enhanced patient-centric features and user flows"
                        linkPage= '/ideo'
                        SelectedAnimation= {ideoAnimation1}
                        componentName= 'Box1'
                        
                        />
                <ScrollChecker classtosee="Box1">
                    <img src = {ideo1} alt='ideo1'/>
                </ScrollChecker>
            </div>
            
            <div className='Box2'>
                <TextBox 
                        heading="Public Health Design Research" 
                        subheadingBold = "Service Design" 
                        subheading=" to promote early dementia detection in partnership with the Public Health Dept & State University."
                        linkPage= '/ideo'
                        SelectedAnimation= {ideoAnimation2}
                        componentName= 'Box1'
                        />
                <TextBox
                heading="The Student Writing Experience" 
                        subheadingBold = "Strategy + UX design" 
                        subheading=" to test and launch newly conceptualized Gen AI based writing features, with a focus on learner inclusivity."
                        linkPage= '/ideo'
                        SelectedAnimation= {ideoAnimation3}
                        componentName= 'Box1'
                        />
            </div>
        </Accordion>
        <Accordion title={<LeftTitle heading="Design Product Manager  ‘21" description="Education technology   |   Learning & Personalisation" logoimage={Byjus_logo}/>}>
            <div className="Box3">
                <TextBox heading="Search Q&A Feature definition + UX Design " 
                        subheadingBold = "From PRD to test & launch" 
                        subheading=" in 6 months"
                        linkPage={"/searchqna"}
                        />
                <ScrollChecker classtosee="Box3">
                    <QnaAnimation />
                </ScrollChecker>
                
            </div>
            <div className="Box4">
                <TextBox heading="Distractors Feature definition + UX Design" 
                        subheadingBold = "Pedagogy + Strategy" 
                        subheading=" to track and improve learning outcomes"
                        linkPage={"/searchqna"}
                        SelectedAnimation = {DisAnimation}
                        componentName = 'gifBox3'
                        />
                <ScrollChecker classtosee="Box4">
                    <DisAnimation />
                </ScrollChecker>
            </div>
        </Accordion>
        
        <Accordion 
        title={
        <LeftTitle heading="Product Manager  ‘19" description="Education technology   |   Start-up 0 to 1" logoimage={aristotle_logo}/>
        }>
            <div className='Box5A'>
                <TextBox 
                        heading="Market Study + Product Strategy" 
                        subheadingBold = "b2b -> b2c journey" 
                        subheading=""
                        linkPage={"/da_strategy"}
                        />
                <ScrollChecker classtosee="Box5A">
                    <AriMarketAnimation />
                </ScrollChecker>
            </div>
            <div className='Box5B'>
                <TextBox
                heading="Product UX Design + Management" 
                        subheadingBold = "Design -> Launch journey" 
                        subheading=""
                        linkPage={"/da_product_design"}
                        />
                <ScrollChecker classtosee="Box5B">
                    <AriProductAnimation />
                </ScrollChecker>
            </div>
        </Accordion>
        
        {/* <StLines/> */}
        <Accordion 
        title={
        <RightTitle heading="Strategic Designer  ‘22" description="Summer internship   |    Workshop design    |    Futuring" logoimage={ThinkPlace_logo}/>
        }>
            <div className="Box6">
                {/* <div className='gifBox6'>
                    <div className='people'>
                        <img src = {ideo_people_img} alt="people"/>
                    </div>
                    <div className='board'>
                        <img src = {board_img} alt="board"/>
                    </div>
                </div> */}
                <ScrollChecker classtosee="Box6">
                    <div className='people'>
                        <img src = {ideo_people_img} alt="people"/>
                    </div>
                    <div className='board'>
                        <img src = {board_img} alt="board"/>
                    </div>
                </ScrollChecker>
                <TextBox heading="Co-designing the Future of Volunteering in Australia" 
                        subheadingBold = "" 
                        subheading=""
                        linkPage={"/searchqna"}
                        />
            </div>
        </Accordion>
        <Accordion 
        title={
        <RightTitle heading="Strategic Designer  ‘22" description="Parsons integrative studio   |    gen z    |    MEDIa + TECH" logoimage={VICE_logo}/>
        }>
            <div className="Box7">
                <TextBox heading="Repositioning Vice as the pioneer of Social ‘Impact’ Media" 
                        subheadingBold = "UX Research + Brand Strategy" 
                        subheading=" leading to a multi-channel campaign design."
                        linkPage={"/VICE"}
                        />
                {/* <div className='gifBox7'>
                    <div className='computer'>
                        <img src = {computer_img} alt="computer"/>
                    </div>
                    <div className='poster_gif'>
                        <img src = {poster_gif} alt="poster_gif"/>
                    </div>
                </div> */}
                <ScrollChecker classtosee="Box7">
                    <div className='computer'>
                        <img src = {computer_img} alt="computer"/>
                    </div>
                    <div className='poster_gif'>
                        <img src = {poster_gif} alt="poster_gif"/>
                    </div>
                </ScrollChecker>
                
            </div>
        </Accordion>
    </div>
)};

export default HomeBody;
