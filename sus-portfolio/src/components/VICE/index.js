import './index.scss';
import HeaderDark from '../OtherPageContentDark/HeaderDark';
import OverviewDark from '../OtherPageContentDark/OverviewDark';
import PageAccordDark from '../OtherPageContentDark/PageAccordionDark'

import feat_def from "../../assets/Skills/feat_def.svg"
import stra_think from "../../assets/Skills/stra_think.svg"
import ux_design from "../../assets/Skills/ux_design.svg"
import headerImg from "../../assets/VICE/header_vice.gif"
import overviewImg from "../../assets/VICE/overview_img.png"
// import { Content1, Content2, Content3, Content4, Content5, Content6 } from './content';

const heading1 = "media + tech   |   vice media group";
const heading2 = "Research + Multi-channel campaign to position VICE as a pioneering platform for GenZ activism";
const myrole = `STUDENT STRATEGIC DESIGNER`
const myrolelist = [
 "Conducting Research, Synthesis and Ideation",
 "Led a focus group session",
 "Owned execution and testing of 1 out of 3 prototypes.",
 "Final presentation at client office along with the team.",];
const skills = {
"interview design": feat_def,
"focus group facilitation": feat_def,
"sense-making": feat_def,
"Stratategic Thinking": stra_think,
"stakeholder management": feat_def,
"prototyping": feat_def,
"presentation": feat_def,
};
const collaborators = ["TEAMmate - Social scientist",
                      "TEAMmate - visual designer",
                      "TEAMmate - strategist",
                      "Parson's Faculty",
                      "vice vp of design vice",
                    "global svp of insights"];

const items_data = [
    {
      heading: 'How Might We',
      subheadings: [],
      content: ["Content1"]
    },
    {
        heading: 'Definition phase',
        subheadings: ['Ask-a-doubt', 'Demo App Screens'],
        content: ["Content3", "Content4"]
      },
    {
        heading: 'Minimum Viable Product phase',
        subheadings: ['Interaction Design', 'Development & Testing'],
        content: ["Content5", "Content6"]
      },
  ];



const VICE = () => {
    return (
    <div className="VICE-container"> 
        <HeaderDark 
        heading1={heading1}
        heading2={heading2}
        header_img = {headerImg}
        myrole={myrole}
        myrolelist={myrolelist}
        skills={skills}
        collaborators={collaborators}/>
        
        <OverviewDark 
        overview_heading="Overview"
        overview_content="This project also represents my journey as a Marketing designer to becoming a Product Manager" 
        overview_img={overviewImg}/>
        <PageAccordDark items = {items_data}/>
    </div>
    
    )
}


export default VICE;


