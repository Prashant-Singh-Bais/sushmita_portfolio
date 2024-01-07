import './index.scss';
import Header from '../../components/OtherPageContent/Header';
import Overview from '../../components/OtherPageContent/Overview';
import PageAccord from '../../components/OtherPageContent/PageAccordion'
import feat_def from "../../assets/Skills/feat_def.svg"
import stra_think from "../../assets/Skills/stra_think.svg"
import ux_design from "../../assets/Skills/ux_design.svg"
import Header_img from "../../assets/Distractors/header_img.jpg"
import distractors_overview from "../../assets/Distractors/dis_overview.png"
import { Content1, Content2, Content3, Content4, Content5, Content6 } from './content';

const heading1 = "EDTECH   |   BYJU’S THINK N’ LEARN PVT LTD";
const heading2 = "Distractors is a feature that leverages UX + pedagogy to improve learning outcomes";
const header_img = Header_img; // Replace with actual image path
const header_img_directon = "right"; // or "below"
const myrole = "DESIGN PRODUCT MANAGER FOCUSSED ON DESIGN-LED PRODUCT INNOVATION";
const skills = {
"FEATURE DEFINITION": feat_def, // Replace with actual image paths
"STRATEGIC THINKING": stra_think,
"UX DESIGN": ux_design,
};
const collaborators = ["VP of product", "Content Lead", "VP of tech"];

const items_data = [
    {
      heading: 'Pedagogy',
      subheadings: ['Distractors rationale', 'Listing learning gaps', 'Framework for remediation'],
      content: [Content1, Content2, Content3]
    },
    {
        heading: 'UX Design',
        subheadings: ['Rapid Prototyping'],
        content: [Content4]
      },
    {
        heading: 'Strategy',
        subheadings: ['Creating distractors', 'Impact on learning outcomes'],
        content: [Content5, Content6]
      },
  ];



const Distractors = () => {
    return (
    <div className="distractors-container"> 
        <Header 
        heading1={heading1}
        heading2={heading2}
        header_img={header_img}
        header_img_directon={header_img_directon}
        myrole={myrole}
        skills={skills}
        collaborators={collaborators}/>
        
        <Overview overview_heading="Overview : Roadmap" overview_img={distractors_overview}/>
        <PageAccord items = {items_data}/>
    </div>
    
    
    )
}


export default Distractors;


