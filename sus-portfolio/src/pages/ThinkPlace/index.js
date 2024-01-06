import React from 'react';
import './index.scss';
import Header from '../../components/OtherPageContent/Header';
import Overview from '../../components/OtherPageContent/Overview';
import PageAccord from '../../components/OtherPageContent/PageAccordion'
import stra_think from "../../assets/Skills/stra_think.svg"
import headerImg from "../../assets/thinkplace/header_image.png"
import overviewImage from "../../assets/thinkplace/thinkplace_overview.jpg";
import linkArrow from "../../assets/thinkplace/linkarrow.svg";
import { Content1, Content2, Content3 } from './content';

const heading1 = "";
const heading2 = '';
const header_img = '';
const header_img_directon = "right"; // or "below"
const myrole = "PRODUCT MANAGER (EARLY CAREER) working with the design studio to translate tech into user centric product features and coordinating implementation with engineering team.";
const skills = {
"Stratategic Thinking": stra_think,
"WORKSHOP DESIGN": stra_think,
"futuring": stra_think,
"CO-DESIGN": stra_think, // Replace with actual image paths
"stakeholder management": stra_think,
"prototyping ": stra_think,
};
const collaborators = ["FOUNDER/CEO", "LIQUID INK STUDIO - UI/UX", "FRONT END ENGINEERING", "BACK END ENGINEERING"];

const items_data = [
    {
      heading: 'Challange',
      subheadings: [],
      content: [Content1]
    },
    {
        heading: 'Solution',
        subheadings: [],
        content: [Content2]
      },
    {
        heading: 'Impact',
        subheadings: [],
        content: [Content3]
      }
  ];


const ThinkPlace = () => {

    return (
    <div className="thinkplace-container"> 
        <div className='thinkplace-background-box-1'>
          <div className='thinkplace-headerholder'>
              <h1>FUTURES   |   Thinkplace global</h1>
              <h2>Combining mass civic participation and futures thinking to facilitate meaningful co-design of a new 10-year national strategy for volunteering </h2>
          </div>
          <div className='logoholder'>
            <div className='logoimage'>
              <img src={headerImg} alt="headerImg"/>
            </div>
            <div className='site'>
            <a href="https://good-design.org/projects/combining-mass-civic-participation-and-futures-thinking-to-facilitate-meaningful-co-design-of-a-new-10-year-national-strategy-for-volunteering/" target="_blank" rel="noreferrer">Visit website</a>
            <img src={linkArrow} alt=""/>
          </div>
          </div>
        </div>
        
        <div className="thinkplace-header">
        <Header 
          heading1={heading1}
          heading2={heading2}
          header_img={header_img}
          header_img_directon={header_img_directon}
          myrole={myrole}
          skills={skills}
          collaborators={collaborators}/>
        </div>
        <div className="thinkplace-overview">
          <Overview overview_heading="Overview - Workshop Design" 
                    overview_para=""
                    overview_img={overviewImage}/>
        </div>
        <div className="thinkplace-pageaccord">
        <PageAccord items = {items_data}/>
        </div>
        
    </div>
    
    )
}

export default ThinkPlace;










