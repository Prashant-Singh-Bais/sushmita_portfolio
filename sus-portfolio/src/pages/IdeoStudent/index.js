import React from 'react';
import './index.scss';
import Header from '../../components/OtherPageContent/Header';
import Overview from '../../components/OtherPageContent/Overview';
import PageAccord from '../../components/OtherPageContent/PageAccordion'
import stra_think from "../../assets/Skills/stra_think.svg"
import headerImg from "../../assets/ideostudent/header_img.png"
import overviewImage from "../../assets/ideostudent/overview_img.png"
import { Content1, Content2, Content3 } from './content';

const heading1 = "edtech   |   IDEO";
const heading2 = "Leveraging Generative AI to create an experience that assists students in the writing experience";
const header_img = headerImg;
const header_img_directon = "right"; // or "below"
const myrole = "INTERACTION DESIGNER collaborating with multiple design leads. Involved in research synthesis, client interactions and prototyping. led the final iteration of redesigning the user experience and creating lo-fi prototypes.";
const skills = {
"feature definition": stra_think,
"Strategic thinking": stra_think,
"ux design": stra_think,
"prototyping": stra_think, // Replace with actual image paths
};
const collaborators = ["business design lead", "design research lead", "interaction design lead", "data scientist"];

const items_data = [
    {
      heading: 'Challange',
      subheadings: [],
      content: [Content1]
    },
    {
        heading: 'Insight',
        subheadings: [],
        content: [Content2]
      },
    {
        heading: 'Solution',
        subheadings: [],
        content: [Content3]
      }

  ];


const IdeoStudent = () => {

    return (
    <div className="ideostudent-container"> 
        <div className="ideostudent-header">
        <Header 
          heading1={heading1}
          heading2={heading2}
          header_img={header_img}
          header_img_directon={header_img_directon}
          myrole={myrole}
          skills={skills}
          collaborators={collaborators}/>
        </div>

        <Overview overview_heading="" 
                  overview_para=""
                  overview_img={overviewImage}/> 
        <PageAccord items = {items_data}/>
        
    </div>
    
    )
}

export default IdeoStudent;










