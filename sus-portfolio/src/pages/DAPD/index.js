import React from 'react';
import './index.scss';
import Header from '../../components/OtherPageContent/Header';
import Overview from '../../components/OtherPageContent/Overview';
import PageAccord from '../../components/OtherPageContent/PageAccordion'
import stra_think from "../../assets/Skills/stra_think.svg"
import headerImg from "../../assets/DAPD/header_img.webp"
import overviewImage from "../../assets/DAPD/overview_img.webp"
import { Content1, Content2, Content3, Content4, Content5, Content6, Content7, Content8 } from './content';

const heading1 = ""//"edtech   |   DIGITAL ARISTOTLE pvt ltd ";
const heading2 = ''//"Designing the revision and remediation-based ‘ARISTOTLE’  a mobile app that leverages data-driven personalization to improve learning outcomes";
const header_img = ''//headerImg; // Replace with actual image path
const header_img_directon = "right"; // or "below"
const myrole = "PRODUCT MANAGER (EARLY CAREER) working with the design studio to translate tech into user centric product features and coordinating implementation with engineering team.";
const skills = {
"Feature Definition": stra_think,
"Persona Creation": stra_think,
"Information Architecture": stra_think, // Replace with actual image paths
"Stratategic Thinking": stra_think,
"Design Management": stra_think,
"UX design": stra_think,
};
const collaborators = ["FOUNDER/CEO", "LIQUID INK STUDIO - UI/UX", "FRONT END ENGINEERING", "BACK END ENGINEERING"];

const items_data = [
    {
      heading: 'Strategy Brainstorm',
      subheadings: [],
      content: [Content1]
    },
    {
        heading: 'Student Personas',
        subheadings: [],
        content: [Content2]
      },
    {
        heading: 'Product Features',
        subheadings: ['Revision + Challenge','Search','Forum'],
        content: [Content3, Content4, Content5]
      },
      {
        heading: 'Visual Design',
        subheadings: [],
        content: [Content6]
      },
      {
        heading: 'Driving Growth',
        subheadings: [],
        content: [Content7]
      },
      {
        heading: 'Learnings',
        subheadings: [],
        content: [Content8]
      },
  ];


const DAPD = () => {

    return (
    <div className="dapd-container"> 
        <div className='background-box-1'>
          <div className='imgholder'>
            <img src={headerImg} alt="headerImg"/>
          </div>
          </div>
        <div className='headerholder'>
            <h1>edtech   |   DIGITAL ARISTOTLE pvt ltd</h1>
            <h2>Designing the revision and remediation-based ‘ARISTOTLE’  a mobile app that leverages data-driven personalization to improve learning outcomes</h2>
        </div>
        <div className="dapd-header">
        <Header 
          heading1={heading1}
          heading2={heading2}
          header_img={header_img}
          header_img_directon={header_img_directon}
          myrole={myrole}
          skills={skills}
          collaborators={collaborators}/>
        </div>
        <div className="dapd-overview">
          <Overview overview_heading="Overview - App information architecture" 
                    overview_para=""
                    overview_img={overviewImage}/>
        </div>
        <div className="dapd-pageaccord">
        <PageAccord items = {items_data}/>
        </div>
        
    </div>
    
    )
}

export default DAPD;










