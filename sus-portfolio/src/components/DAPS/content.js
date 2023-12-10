import './content.scss'
import img_1 from '../../assets/DAPS/img_1.svg'
import img_2 from '../../assets/DAPS/img_2.svg'
import img_3 from '../../assets/DAPS/img_3.png'
import img_4 from '../../assets/SearchQna/img_4.svg'
import img_5 from '../../assets/SearchQna/img_5.svg'
import img_6 from '../../assets/SearchQna/img_6.svg'
import img_7 from '../../assets/SearchQna/img_7.svg'
import img_8 from '../../assets/SearchQna/img_8.svg'
import img_9 from '../../assets/SearchQna/img_9.svg'
import img_10 from '../../assets/SearchQna/img_10.svg'
import img_11 from '../../assets/SearchQna/img_11.svg'
import img_12 from '../../assets/SearchQna/img_12.svg'
import img_13 from '../../assets/SearchQna/img_13.svg'
import img_14 from '../../assets/SearchQna/img_14.svg'
import img_15 from '../../assets/SearchQna/img_15.svg'
import img_16 from '../../assets/SearchQna/img_16.svg'
import img_17 from '../../assets/SearchQna/img_17.svg'
import img_18 from '../../assets/SearchQna/img_18.svg'
import img_19 from '../../assets/SearchQna/img_19.svg'
import img_20 from '../../assets/SearchQna/img_20.svg'
import img_21 from '../../assets/SearchQna/img_21.svg'
import img_22 from '../../assets/SearchQna/img_22.svg'
import img_23 from '../../assets/SearchQna/img_23.svg'
import img_24 from '../../assets/SearchQna/img_24.svg'
import img_25 from '../../assets/SearchQna/img_25.svg'
import img_26 from '../../assets/SearchQna/img_26.svg'
import img_27 from '../../assets/SearchQna/img_27.svg'
import img_28 from '../../assets/SearchQna/img_28.svg'
import img_29 from '../../assets/SearchQna/img_29.svg'
import img_30 from '../../assets/SearchQna/img_30.svg'
import img_31 from '../../assets/SearchQna/img_31.svg'



const Content1 = () => (
    <div className="content1">
        <p>The existing B2B product - AssessEd was a tool that redefined assessments in 3 key ways.
            <ul>
                <li>Digitized test paper creation</li>
                <li>Online correction tool</li>
                <li>Insightful reports</li>
            </ul>
        </p>
    </div>
);

const Content2 = () => (
    <div className="Content2">
        <p>A lot of information is trapped in schools in analog form. If it were treated as data, it could be analyzed to gain valuable insights into students’ learning and the efficacy of tutoring.</p>
        <div className='pair'>
            <div className='long'>
                <p>Currently existing information that is not systematized -
                <ul>
                <li>What a child learns at schools</li>
                <li>Fragmented learning between school, tuition and home.</li>
                <li>Trends in teaching ie, identifying which topics teachers consider important etc.</li>
                <li>Students’ learning progress in different areas</li>
                </ul>
                </p>
            </div>
            <div className='short'>
                <img src= {img_1} alt="img_1"/>
            </div>
        </div>
    
    </div>
);

const Content3 = () => (
    <div className="Content3">
        <div className='pair'>
            <div className='long'>
                <p>Data is the new oil. In 2 years of its functioning, AssessEd had partnered with 15+ schools across India and the wealth of data generated on the platform, and its impact if analyzed could be huge - 
                    <ul>
                        <li>24,665 unique users</li>
                        <li>355,727 answer sheets corrected</li>
                        <li>6,344,840 unique interactions including creating test papers, viewing reports, etc</li>
                    </ul>
                </p>
            </div>
            <div className='short'>
                <img src= {img_2} alt="img_2"/>
            </div>
        </div>
        {/* <div className='temp_head'>
            <h2>Market Research</h2>
        </div>
        <p>EdTech market in India, 2018</p>
        <img src= {img_3} alt="img_3"/> */}
    </div>
);

const Content4 = () => (
    <div className="Content4">
    </div>
);

const Content5 = () => (
    <div className="Content5">

    </div>
);
const Content6 = () => (
    <div className="Content6">
        <p>With consensus on the UX design, we moved on to coordinating the UI design, front-end and back-end development. I used Jira to assign and track tasks.</p>
        <p> The challenge faced by front-end developers was to coordinate vVICE segments with the open steps. We then decided to forego the segmenting of vVICEs.</p>
        <p>Back end developers mostly worked on data management and retrieval. In order to streamline content creation, a tutor-facing tool was designed and shipped. Below is the wireframe -</p>
        <div className='vertical_images'>
            <img src= {img_27} alt="img_27"/>
            <img src= {img_28} alt="img_28"/>
        </div>
        <p>I was also coordinating a test with the UX Research team to evaluate the feature’s impact on learning outcomes.</p>
        <div className='vertical_images'>
            <img src= {img_29} alt="img_29"/>
            <img src= {img_30} alt="img_30"/>
        </div>
        <div className='temp_head'>
            <h2>Post MVP</h2> 
        </div>
        <p>I departed from the company right after the MVP launch. Below is a web version of the step-by-step ‘Math Solver’ that is currently live.</p>
        <img src= {img_31} alt="img_31"/>
    </div>
);

export { Content1, Content2, Content3, Content4, Content5, Content6 };
