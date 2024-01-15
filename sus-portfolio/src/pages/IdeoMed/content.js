import './content.scss'
import img_1 from '../../assets/ideomed/img_1.svg'


const Content1 = () => (
    <div className="IdeoMed_content1">
        <p>IDEO was hired by a team of academics focused on early dementia detection and  pursuing opportunities in employing human centered design thinking to create effective solutions to achieve their goal. </p>
        <p>The scope was a design research project that would involve 25+ interviews with various stakeholders in the primary care ecosystem and geriatric support system.</p>
        <p>In order to map the status-quo of dementia detection, I designed 20+ sacrificial concepts based on desk research first, and following iterations based on learning from previous interviews. </p>
        <img src={img_1} alt=""/>
    </div>
);

const Content2 = () => (
    <div className="IdeoMed_content2">
        <p>Our biggest learnings came from understanding the core personas within the health-care system. </p>
        <div className='purple_para'>
            <p>The major need is in exercising empathy towards Primary Care Providers, who struggle with too many priorities, systemic challenges in implementing new workflows and immense stigma related to Dementia, from the patients.</p>
        </div>
    </div>
);

const Content3 = () => (
    <div className="IdeoMed_content3">
        <p>Following multiple co-designing sessions with the client team, it became clear that completely relying on changes in the health care system would not be a fruitful mission. We created solutions that took a blended approach in</p>
        <ul>
            <li><strong>advocacy - raising awareness and encouraging more patients to get tested</strong></li>
            <li><strong>simplifying communications & scheduling to reduce PCPs’ cognitive load</strong></li>
        </ul>
        <p>Our project report, including findings, insights and solutions, was submitted to the state health department by the client team.</p>
    </div>

);




export { Content1, Content2, Content3};
