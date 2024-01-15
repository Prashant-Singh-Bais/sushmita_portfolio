import './content.scss'
import StLine from '../../components/Shapes/StLines';
import img_1 from '../../assets/ideostudent/img_1.png'
import img_2 from '../../assets/ideostudent/img_2.png'
import img_3 from '../../assets/ideostudent/img_3.png'
import img_4 from '../../assets/ideostudent/img_4.png'
import img_5 from '../../assets/ideostudent/img_5.png'
import img_6 from '../../assets/ideostudent/img_6.png'
import img_7 from '../../assets/ideostudent/img_7.png'

const Content1 = () => (
    <div className="ideostu_content1">
        <p>Our client is an EdTech platform that helps educators and students to employ generative AI in school essay writing. Their ethos has been to embrace the technology in the right way, rather than ban it. </p>
        <p>Our brief was to design a student-side writing experience, that would complement the existing teacher-side evaluating experience.</p>
        <img src={img_1} alt=""/>
        <p>The project was scoped as a 5-week sprint. Our plan of action -</p>
        <ul>
            <li>Experiment with Gen AI capabilities</li>
            <li>Brainstorm feature ideas</li>
            <li>Design and conduct student interviews around sacrificial concepts</li>
            <li>Synthesize and deliver an MVP feature-set</li>
        </ul>
    </div>
);

const Content2 = () => (
    <div className="ideostu_content2">
        <div className='eightandtwo'>
            <div className='large'>
            <p>From our previous research interviews we learnt that </p>
            <div className='purple_para_rubic'>
                <p>Students struggle with the nuances of writing where AI can lend a helping hand but also provide adequate space for original thought and mentorship from the teacher.</p>
            </div>
            </div>
            <div className='small'>
                <img src={img_2} alt="" style={{paddingTop:'20px'}}/>
            </div>
        </div>
        
    </div>
);

const Content3 = () => (
    <div className="ideostu_content3">
        <div className='twobythreeimages'>
            <div className='small'>
                <img src={img_3} alt="" style={{margin:'20px', width:'80%'}}/>
            </div>
            <div className='big'style={{margin:'20px', width:'70%'}}>
            <p>We created 7 sacrificial concepts that enhanced the student writing experience <strong>but did not replace their process of thinking</strong> through an essay. </p>
            </div>
        </div>
        <p>Concepts revolved around -</p>
        <ul>
            <li>Getting started & Finding the right topic</li>
            <li>Planning the essay with research & analysis</li>
            <li>Writing with logistic assistance & examples</li>
            <li>Refining with AI assistance with tonality and editing</li>
        </ul>
        <div className='underline_heading'>
            <p>LEARNER INCLUSIVITY</p>
            <StLine/>
        </div>
        <p>There was an emphasis on learner inclusivity and creating experience that aligned with the 4 pillars of learner inclusivity defined by <u>Digital Promise Organization’s Learner Variability Navigator.</u></p>
        <img src={img_4} alt=""/>
        <p>We used this framework to focus on different aspects of the experience design that also boosted the pedagogy. Some these include, but not limited to -</p>
        
        <div className='twobythreeimages'>
            <div className='small'>
                <ul>
                    <li>Expression through multimedia</li>
                    <li>Memory assistance</li>
                    <li>Mindfulness</li>
                    <li>Adaptiveness</li>
                    <li>Tracking</li>
                </ul>
            </div>
            <div className='big'>
                <img src={img_5} alt=""/>
            </div>
        </div>
        
        <div className='underline_heading'>
            <p>PROMPT ENGINEERING + PEDAGOGY</p>
            <StLine/>
        </div>
        <div className='twobythreeimages' style={{marginTop:'40px'}}>
            <div className='small'>
                <img src={img_6} alt=""/>
            </div>
            <div className='big'>
            <p>Our demo-LLM model was designed using specific prompts. The bot was prompted to behave as an encouraging guide that uses pedagogy-based coaching models such as the 5E model.</p>
            </div>
        </div>
        <div className='underline_heading'>
            <p>GAMIFICATION</p>
            <StLine/>
        </div>
        <img src={img_7} alt="" style={{marginLeft:'15%', width:'70%'}}/>
        <p>Leveraging playfulness in the experience was a key factor. Multiple gamified experiences that utilize Gen AI to create humor and intentional-randomness were designed. So key use-cases - warm up games, an ad-lib prompter, finding relevant POVs to write about and reflect on tonality.</p>
    </div>

);




export { Content1, Content2, Content3};
