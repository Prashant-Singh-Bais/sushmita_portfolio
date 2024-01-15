import React from 'react';
import './index.scss';
import Header from '../../components/OtherPageContent/Header';
//import Overview from '../../components/OtherPageContent/Overview';
import PageAccord from '../../components/OtherPageContent/PageAccordion'
import stra_think from "../../assets/Skills/stra_think.svg"
import headerImg from "../../assets/ideomed/header_img.svg"
//import overviewImage from "../../assets/IdeoMed/overview_img.svg"
import { Content1, Content2, Content3} from './content';

const heading1 = "HEALTHCARE   |   IDEO";
const heading2 = "Systemic design solutions promoting early Dementia detection for the Public Health Department in partnership with a State University";
const header_img = headerImg;
const header_img_directon = "below"; // or "below"
const myrole = "INTERACTION DESIGNER collaborating with Design research lead. Involved in research design, client interactions and prototyping. led the experience design & prototyping work-stream in collaboration with lead.";
const skills = {
"SACRIFICIAL CONCEPTS": stra_think,
"INTERVIEWING": stra_think,
"Strategic thinking": stra_think, 
"ux design": stra_think,
"prototyping": stra_think, 
};
const collaborators = ["design research lead", "interaction design lead", "PORTFOLIO MANAGER, MD."];

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


const IdeoMed = () => {

    return (
    <div className="IdeoMed-container"> 
        <div className="IdeoMed-header">
        <Header 
          heading1={heading1}
          heading2={heading2}
          disclaimer="*Client details and visual design are modified or not mentioned due to a confidentiality agreement"
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
        
        
    </div>
    
    )
}

export default IdeoMed;










