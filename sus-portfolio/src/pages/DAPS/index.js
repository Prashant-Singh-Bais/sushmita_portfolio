import React from 'react';
import './index.scss';
import Header from '../../components/OtherPageContent/Header';
import Overview from '../../components/OtherPageContent/Overview';
import PageAccord from '../../components/OtherPageContent/PageAccordion'
import stra_think from "../../assets/Skills/stra_think.svg"
import headerImg from "../../assets/DAPS/header_img.gif"
import overviewImage from "../../assets/DAPS/overview_img.svg"
import { Content1, Content2, Content3, Content4, Content5, Content6, Content7, Content8 } from './content';

const heading1 = "edtech   |   DIGITAL ARISTOTLE pvt ltd";
const heading2 = "Creating a holistic offering by introducing a new B2C app that functions in tandem with the existing B2B product";
const header_img = headerImg;
const header_img_directon = "below"; // or "below"
const myrole = "PRODUCT MANAGER (EARLY CAREER) WORKING CLOSELY WITH THE FOUNDER TO RESEARCH, STRATEGIZE AND ARTICULATE CORE VALUE PROPOSITIONS";
const skills = {
"MARKET RESEARCH": stra_think,
"COMPETITIVE ANALYSIS": stra_think,
"BUILDING TECH FAMILIARITY": stra_think, // Replace with actual image paths
"Stratategic Thinking": stra_think,
"PRODUCT IDEATION": stra_think,
};
const collaborators = ["FOUNDER/CEO", "ENGINEERING LEAD", "Sales Team"];

const items_data = [
    {
      heading: 'Existing B2B',
      subheadings: [],
      content: [Content1]
    },
    {
        heading: 'The Problem',
        subheadings: [],
        content: [Content2]
      },
    {
        heading: 'B2B Data Value Propositions',
        subheadings: [],
        content: [Content3]
      },
      {
        heading: 'Market Research',
        subheadings: ['Competitive Analysis','Key Opportunity'],
        content: [Content4, Content5]
      },
      {
        heading: 'Strategy',
        subheadings: ['Go-to-Market','Revenue model'],
        content: [Content6, Content7]
      },
      {
        heading: 'Data Pitch',
        subheadings: [],
        content: [Content8]
      },
  ];


const DAPS = () => {

    return (
    <div className="daps-container"> 
        <div className="daps-header">
        <Header 
          heading1={heading1}
          heading2={heading2}
          header_img={header_img}
          header_img_directon={header_img_directon}
          myrole={myrole}
          skills={skills}
          collaborators={collaborators}/>
        </div>

        <Overview overview_heading="Overview" 
                  overview_para="This project represents my journey from being a Marketing designer to becoming a Product Manager"
                  overview_img={overviewImage}/>
        <PageAccord items = {items_data}/>
        
    </div>
    
    )
}

export default DAPS;










