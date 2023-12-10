import React, { useRef, useEffect, forwardRef  } from 'react';
import './index.scss';
import Header from '../OtherPageContent/Header';
import Overview from '../OtherPageContent/Overview';
import PageAccord from '../OtherPageContent/PageAccordion'
// import {Text1, Text2, Text3, Text4, Text5} from '../Text';
import feat_def from "../../assets/Skills/feat_def.svg"
import stra_think from "../../assets/Skills/stra_think.svg"
import ux_design from "../../assets/Skills/ux_design.svg"
import headerImg from "../../assets/DAPS/header_img.gif"
import overviewImage from "../../assets/DAPS/overview_img.svg"
import { Content1, Content2, Content3, Content4, Content5, Content6 } from './content';

const heading1 = "edtech   |   DIGITAL ARISTOTLE pvt ltd";
const heading2 = "Creating a holistic offering by introducing a new B2C app that functions in tandem with the existing B2B product";
const header_img = headerImg; // Replace with actual image path
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
        subheadings: ['Competitive Analysis','Market Analysis','Opportunity Areas'],
        content: ["Content5", "Content5", "Content5"]
      },
      {
        heading: 'Strategy',
        subheadings: ['Go-to-Market','Revenue model'],
        content: ["Content5", "Content5"]
      },
      {
        heading: 'Data Pitch',
        subheadings: [],
        content: ["Content5"]
      },
  ];


const DAPS = () => {

    return (
    <div className="daps-container"> 
        <div className="blue-rectangular"></div>

        <Header 
        heading1={heading1}
        heading2={heading2}
        header_img={header_img}
        header_img_directon={header_img_directon}
        myrole={myrole}
        skills={skills}
        collaborators={collaborators}/>

        <Overview overview_heading="Overview" 
                  overview_para="This project represents my journey from being a Marketing designer to becoming a Product Manager"
                  overview_img={overviewImage}/>
        <div className="lightblue-rectangular"></div>
        <PageAccord items = {items_data}/>
        
    </div>
    
    )
}

export default DAPS;










