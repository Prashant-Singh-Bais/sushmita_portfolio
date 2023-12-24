import './content.scss'
import img_1 from '../../assets/DAPS/img_1.svg'
import img_2 from '../../assets/DAPS/img_2.svg'
import img_3 from '../../assets/DAPS/img_3.webp'
import img_4 from '../../assets/DAPS/img_4.webp'
import img_6 from '../../assets/DAPS/img_6.svg'
import img_7 from '../../assets/DAPS/img_7.svg'





const Content1 = () => (
    <div className="daps_content1">
        <p>The existing B2B product - AssessEd was a tool that redefined assessments in 3 key ways.</p>
            <ul>
                <li>Digitized test paper creation</li>
                <li>Online correction tool</li>
                <li>Insightful reports</li>
            </ul>
        
    </div>
);

const Content2 = () => (
    <div className="daps_content2">
        <p>A lot of information is trapped in schools in analog form. If it were treated as data, it could be analyzed to gain valuable insights into students’ learning and the efficacy of tutoring.</p>
        <div className='pair-daps'>
            <div className='long'>
                <p>Currently existing information that is not systematized -</p>
                <ul>
                <li>What a child learns at schools</li>
                <li>Fragmented learning between school, tuition and home.</li>
                <li>Trends in teaching ie, identifying which topics teachers consider important etc.</li>
                <li>Students’ learning progress in different areas</li>
                </ul>
                
            </div>
            <div className='short'>
                <img src= {img_1} alt="img_1"/>
            </div>
        </div>
    
    </div>
);

const Content3 = () => (
    <div className="daps_content3">
        <div className='pair-daps'>
            <div className='long'>
                <p>Data is the new oil. In 2 years of its functioning, AssessEd had partnered with 15+ schools across India and the wealth of data generated on the platform, and its impact if analyzed could be huge -</p> 
                    <ul>
                        <li>24,665 unique users</li>
                        <li>355,727 answer sheets corrected</li>
                        <li>6,344,840 unique interactions including creating test papers, viewing reports, etc</li>
                    </ul>
                
            </div>
            <div className='short'>
                <img src= {img_2} alt="img_2"/>
            </div>
        </div>
        <div className='daps_head'>
            <h2>Market Research</h2>
        </div>
        <p>EdTech market in India, 2018</p>
        <img src= {img_3} alt="img_3"/>
    </div>
);

const Content4 = () => (
    <div className="daps_content4">
        <img src= {img_4} alt="img_4"/>
    </div>
);

const Content5 = () => (
    <div className="daps_content5">
        <p>UNBUNDLING OF K12 EDUCATION SERVICES </p>
        <p>An increasing gap in what students want versus what the school can provide plus increasingly wealthier parents willing to pay for added educational services led to an unbundling of formal education in the form of tuitions, video lessons, workshops, career counseling, etc.</p>
        <p>Our existing B2B product already leverages this opportunity by providing an added service of digitized reports to schools and students.</p> 
        <p>How might we use this existing data to improve learning outcomes?</p>

        <div className='poster-1'>
            <div className='vertical_textbox'>
                <h2>Treating Learning as a data-based process.</h2>
            </div>
        <p><br/><br/><br/></p>
        
        <div className='para_box'>
            <p>KNOWLEDGE STATE AND MASTERY</p>
            <p>The data from students’ reports is used to map each student’s ‘knowledge state’ for every concept in the learning process. Questions are also mapped to the corresponding concepts and contain meta tags of difficulty.</p>
            <p>PERSONALIZATION </p>
            <p>Corresponding to the knowledge state, the system chooses questions from the database that are at the appropriate level of relative difficulty for that student, presenting the best path to learn a concept.</p>
            <p> MAPPING THE LEARNING JOURNEY</p>
            <p>By tracking changes in the knowledge state, the system can provide a visual representation of the student’s learning curve in each concept as well as across the entire subject.</p>
            <p>ANALYZING FOR LEARNING GAPS</p>
            <p>The data allows us to pin-point gaps in a student’s learning and allows for more efficient remediation.</p>
        </div>
        <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
        </div>
        <div className='poster-2'>
        <div className='daps_head'>
            <h2>Key Differentiators</h2>
        </div>
        
        
        <ul>
            <li>Data is continuously generated in schools with tests and exams. We do not rely on B2C user data - which is often inconsistent in small numbers - to understand on learning trends etc. At the same time, we’re able to provide value to B2C users, by transferring the B2B insights into the B2C experience.</li>
            <li> Focusing on remediation and revision to improve learning outcomes, instead of producing expensive video lessons.</li>
        </ul>
        
        </div>
    </div>
);
const Content6 = () => (
    <div className="daps_content6">
        <img src= {img_6} alt="img_6"/>
        <p>Creating an absolute continuum in the learning process by introducing revision and remediation.</p>
    </div>
);

const Content7 = () => (
    <div className="daps_content7">
        <img src= {img_7} alt="img_7"/>
    </div>
);

const Content8 = () => (
    <div className="daps_content8">
        <p>HBR quote </p>
        <p><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
        <p>DATA MOATS</p>
            <ul>
                <li>In-school data</li>
                <li>Hard to imitate assessment insights</li>
                <li>Data insights can be rapidly adopted as the system is AI based</li>
                <li>Data remains relevant as it continuously adapts to changing curriculum</li>
                <li>Data from one user helps the other, B2B -> B2C</li>
            </ul>
        
        <p>NETWORK EFFECTS</p>
            <ul>
                <li>Ability to identify important topics Ability to use a large databank of questions to create a doubt-solving search experience</li>
                <li>Ability to use a large databank of questions to create a doubt-solving search experience</li>
                <li>Ability to identify areas of improvement or misconceptions faced by a large group of students</li>
                <li>Revision on the B2C app and performance on the school test, recorded on the B2B platform, creates cause & effect insights that could be used to improve the B2C recommendation models.</li>
            </ul>
        
        <div className='daps_head'>
            <h2>Revision and remediation based b2c app </h2>
        </div>
    </div>
);

export { Content1, Content2, Content3, 
         Content4, Content5, Content6,
         Content7, Content8 };
