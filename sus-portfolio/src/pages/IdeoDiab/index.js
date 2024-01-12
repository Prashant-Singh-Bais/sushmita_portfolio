import React from 'react';
import './index.scss';
import Header from '../../components/OtherPageContent/Header';
//import Overview from '../../components/OtherPageContent/Overview';
import PageAccord from '../../components/OtherPageContent/PageAccordion'
import stra_think from "../../assets/Skills/stra_think.svg"
import headerImg from "../../assets/ideodia/header_img.png"
//import overviewImage from "../../assets/ideodia/overview_img.svg"
//import { Content1, Content2, Content3} from './content';

const heading1 = "HEALTHCARE   |   IDEO";
const heading2 = "Enhancing the patient experience with clarity and transparency to reposition a global healthcare titan";
const header_img = headerImg;
const header_img_directon = "below"; // or "below"
const myrole = "INTERACTION DESIGNER collaborating with multiple design leads. Involved in research synthesis, client interactions and prototyping. led the final iteration of redesigning the user experience and creating lo-fi prototypes.";
const skills = {
"feature definition": stra_think,
"ux design": stra_think,
"prototyping": stra_think, // Replace with actual image paths
};
const collaborators = ["business design lead", "design research lead", "interaction design lead", "data scientist"];

const items_data = [
    {
      heading: 'Challange',
      subheadings: [],
      content: ["Content1"]
    },
    {
        heading: 'Insight',
        subheadings: [],
        content: ["Content2"]
      },
    {
        heading: 'Solution',
        subheadings: [],
        content: ["Content3"]
      }

  ];


const IdeoDia = () => {

    return (
    <div className="ideodia-container"> 
        <div className="ideodia-header">
        <Header 
          heading1={heading1}
          heading2={heading2}
          header_img={header_img}
          header_img_directon={header_img_directon}
          myrole={myrole}
          skills={skills}
          collaborators={collaborators}/>
        </div>

        {/* <Overview overview_heading="Overview" 
                  overview_para="This project represents my journey from being a Marketing designer to becoming a Product Manager"
                  overview_img={overviewImage}/> */}
        <PageAccord items = {items_data}/>
        <div className='background-box-4'></div>
        
    </div>
    
    )
}

export default IdeoDia;










