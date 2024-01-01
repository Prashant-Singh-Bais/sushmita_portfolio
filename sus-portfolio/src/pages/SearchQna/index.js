import './index.scss';
import Header from '../../components/OtherPageContent/Header';
import Overview from '../../components/OtherPageContent/Overview';
import PageAccord from '../../components/OtherPageContent/PageAccordion'
// import {Text1, Text2, Text3, Text4, Text5} from '../Text';
import feat_def from "../../assets/Skills/feat_def.svg"
import stra_think from "../../assets/Skills/stra_think.svg"
import ux_design from "../../assets/Skills/ux_design.svg"
import iphone from "../../assets/iPhones.svg"
import qna from "../../assets/qna.svg"
import { Content1, Content2, Content3, Content4, Content5, Content6 } from './content';

const heading1 = "edtech   |   byju’s think n learn pvt ltd  ";
const heading2 = "Phased rollout of the Search QnA feature: driving product development with UX design/design thinking";
const header_img = iphone; // Replace with actual image path
const header_img_directon = "right"; // or "below"
const myrole = "Design Product Manager defining new feature strategy, ux design, co-ordinating dev and feature testing";
const skills = {
"feature defination": feat_def, // Replace with actual image paths
"Stratategic Thinking": stra_think,
"UX Design": ux_design,
};
const collaborators = ["VP of product", "sr product manager", "VP of tech"];

const items_data = [
    {
      heading: 'Discovery phase',
      subheadings: ['Forum - Byju’s Version', 'Prioritizing Feature Characteristics'],
      content: [Content1, Content2]
    },
    {
        heading: 'Definition phase',
        subheadings: ['Ask-a-doubt', 'Demo App Screens'],
        content: [Content3, Content4]
      },
    {
        heading: 'Minimum Viable Product phase',
        subheadings: ['Interaction Design', 'Development & Testing'],
        content: [Content5, Content6]
      },
  ];



const SearchQna = () => {
    return (
    <div className="qna-container"> 
        <Header 
        heading1={heading1}
        heading2={heading2}
        header_img={header_img}
        header_img_directon={header_img_directon}
        myrole={myrole}
        skills={skills}
        collaborators={collaborators}/>
        
        <Overview overview_heading="Overview : Roadmap" overview_img={qna}/>
        <PageAccord items = {items_data}/>
    </div>
    
    
    )
}


export default SearchQna;


