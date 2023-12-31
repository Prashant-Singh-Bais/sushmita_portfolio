import './content.scss'
import img_1 from '../../assets/DAPD/img_1.webp'
import img_2 from '../../assets/DAPD/img_2.webp'
import img_3 from '../../assets/DAPD/img_3.webp'
import img_4 from '../../assets/DAPD/img_4.webp'
import img_5 from '../../assets/DAPD/img_5.webp'
import img_6 from '../../assets/DAPD/img_6.webp'
import img_7 from '../../assets/DAPD/img_7.webp'
import img_8 from '../../assets/DAPD/img_8.webp'
import img_9 from '../../assets/DAPD/img_9.webp'
import img_10 from '../../assets/DAPD/img_10.webp'
import img_11 from '../../assets/DAPD/img_11.webp'
import img_12 from '../../assets/DAPD/img_12.webp'
import img_13 from '../../assets/DAPD/img_13.webp'
import img_14 from '../../assets/DAPD/img_14.webp'
import img_15 from '../../assets/DAPD/img_15.webp'
import img_16 from '../../assets/DAPD/img_16.webp'
import img_17 from '../../assets/DAPD/img_17.webp'
import img_18 from '../../assets/DAPD/img_18.webp'
import img_19 from '../../assets/DAPD/img_19.webp'
import img_20 from '../../assets/DAPD/img_20.webp'
import img_21 from '../../assets/DAPD/img_21.webp'
import img_22 from '../../assets/DAPD/img_22.webp'
import img_23 from '../../assets/DAPD/img_23.webp'
import img_24 from '../../assets/DAPD/img_24.webp'
import img_25 from '../../assets/DAPD/img_25.webp'
import img_26 from '../../assets/DAPD/img_26.webp'
import img_27 from '../../assets/DAPD/img_27.webp'
import img_28 from '../../assets/DAPD/img_28.webp'
import img_29 from '../../assets/DAPD/img_29.webp'
import img_30 from '../../assets/DAPD/img_30.webp'
import pallet from '../../assets/DAPD/pallet.webp'
import StLine from '../../components/Shapes/StLines'





const Content1 = () => (
    <div className="dapd_content1">
        <p>With the strategy to introduce a B2C product that is based on revision and remediation, I began to brainstorm around supporting features that could enhance the student’s experience.</p>
        <div className='contentImage'>
        <img src= {img_1} alt="img_1"/>
        </div>
    </div>
);

const Content2 = () => (
    <div className="dapd_content2">
        <div className='contentImage'>
        <img src= {img_2} alt="img_2"/>
        <img src= {img_3} alt="img_3"/>
        <img src= {img_4} alt="img_4"/>
        </div>
    </div>
);

const Content3 = () => (
    <div className="dapd_content3">
        <div className='contentImage'>
            <img src= {img_5} alt="img_5"/>
        </div>
        <div className='dapd_content_heading'>
            <h2>Daily Revision</h2>
        </div>
        <div className='contentImage'>
            <img src= {img_6} alt="img_6"/>
        </div>
        <div className='underline_heading'>
            <p>REVISION MODULES</p>
            <StLine/>
        </div>
        <p>Education content can be divided into a knowledge graph shown below. Since the node represents the right level of granularity and size, we chose to create revision modules based on them.</p>
        <div className='contentImage'>
            <img src= {img_7} alt="img_7"/>
            <img src= {img_8} alt="img_8"/>
        </div>
        <div className='underline_heading'>
            <p>IMMERSIVE & ADAPTIVE</p>
            <StLine/>
        </div>
        <div className='dapd-pair'>
            <div className='short'>
                <img src= {img_9} alt="img_9"/>
            </div>
            <div className='long'>
                <h2>Adaptive AI</h2>
                <h3>Every question asked is adaptive to the outcome of the previous question.</h3>
                <p>100,000 Questions in the database, each mapped to a difficulty level. AI constantly tracks every student’s knowledge state or ‘mastery’ in a particular ‘learning outcome’, using data from their school reports and revisions on the app. AI suggests questions with appropriate difficulty level to challenge the student with increasing mastery and remediate students with decreasing or constant mastery.</p>
            </div>
        </div>
        <div className='underline_heading'>
            <p>REMEDIATION</p>
            <StLine/>
        </div>
        <p>Content Suggestions</p>
        <div className='dapd-pair'>
            <div className='short'>
                <img src= {img_10} alt="img_10"/>
            </div>
            <div className='long'>
                <img src= {img_11} alt="img_11"/>
                <img src= {img_12} alt="img_12"/>
                <p>Personalized content suggestions based on student’s mastery in different concepts and questions they need might revisions with. </p>
            </div>
        </div>
        <p>Within a Revision</p>
        <div className='dapd-pair'>
            <div className='short'>
                <img src= {img_13} alt="img_13"/>
            </div>
            <div className='long'>
                <p>An immersive experience within the revision to remediate the student step by step, resolving the basic concepts before they can take on more complicated ones. </p>
            </div>
        </div>
        <div className='dapd_content_heading'>
            <h2>Challenge</h2>
        </div>
        <p>A socialized version of the Revision feature. The snippet below shows the UI/UX design of the feature.</p>
        <div className='contentImage'>
            <img src= {img_14} alt="img_14"/>
        </div>
    </div>

);

const Content4 = () => (
    <div className="dapd_content4">
        <div className='contentImage'>
            <img src= {img_15} alt="img_15"/>
        </div>
        <div className='dapd_content_heading'>
            <h2>Unified Search</h2>
        </div>
        <div className='underline_heading'>
            <p>PROBLEM SOLVING</p>
            <StLine/>
        </div>
        <img src= {img_16} alt="img_16"/>
        <p>After scanning, students would see a list of questions from our database that matched the search input. The latest BERT NLP model was implemented to achieve this interaction.</p>
        <img src= {img_17} alt="img_17"/>
    </div>
);

const Content5 = () => (
    <div className="dapd_content5">
        <img src= {img_18} alt="img_18"/>
        <div className='dapd_content_heading'>
            <h2>Aristotle Forum</h2>
        </div>
        <p>Our last feature Forum was a platform for students to post syllabus-specific questions and receive answers from Aristotle subject matter experts as well as other students. Below is a snippet of the feature’s UI/UX design.</p>
        <img src= {img_19} alt="img_19"/>
    </div>
);
const Content6 = () => (
    <div className="dapd_content6">
        <div className='underline_heading'>
            <p>APP ICON</p>
            <StLine/>
        </div>
        <img src= {img_20} alt="img_21"/>
        <p>Creating an absolute continuum in the learning process by introducing revision and remediation.</p>
        <div className='underline_heading'>
            <p>UI DESIGN LANGUAGE</p>
            <StLine/>
        </div>
        <p>Bright + Warm color palette</p>
        <img src= {pallet} alt="pallet"/>
        <p>Doodle-friendly illustrations & icons designed to enhance students’ visual memory for all chapters, concepts and learning outcomes.</p>
        <img src= {img_22} alt="img_22"/>


    </div>
);
const Content7 = () => (
    <div className="dapd_content7">
        <p>User data from the first 9 months post launch suggested that Revision was seeing steady engagement while social features such as ‘Challenge’ and ‘Forum’ were also popular.</p>
        <img src= {img_23} alt="img_23"/>
        <div className='underline_heading'>
            <p>1. REWARDS</p>
            <StLine/>
        </div>
        <ul>
            <li>Stars for completing a mastery level in Revision</li>
            <li>Badges for different levels of mastery</li>
            <li>Gift vouchers redeemable on Amazon upon collecting 100 stars</li>
        </ul>
        <div className='vertical_images'>
            <img src= {img_24} alt="img_24"/>
            <img src= {img_25} alt="img_25"/>
            <img src= {img_26} alt="img_26"/>
        </div>
        <div className='underline_heading'>
            <p>2. LEADERBOARDS</p>
            <StLine/>
        </div>
        <div className='dapd-pair'>
            <div className='short'>
                <img src= {img_27} alt="img_27"/>
            </div>
            <div className='long'>
                <ul>
                    <li>Amongst student’s of their school</li>
                    <li>Amongst all app users</li>
                </ul>
            </div>
        </div>
        <div className='underline_heading'>
            <p>3. REFERRALS</p>
            <StLine/>
        </div>
        <div className='vertical_images'>
            <img src= {img_28} alt="img_28"/>
            <img src= {img_29} alt="img_29"/>
        </div>
        <div className='underline_heading'>
            <p>4. PUSH NOTIFICATIONS</p>
            <StLine/>
        </div>
        <img src= {img_30} alt="img_30"/>
        <div className='underline_heading'>
            <p>GROWTH METRICS</p>
            <StLine/>
        </div>
        <ul>
            <li>383,891 Question attempted on the system in 3 Months - ENGAGEMENT WITH REVISION & CHALLENGE FEATURES</li>
            <li>22% new B2C users without digital marketing - GROWTH INITIATIVES</li>
            <li>5332 daily new users added in a 30 day rolling average</li>
        </ul>
    </div>
);

const Content8 = () => (
    <div className="dapd_content7">
        <ul>
            <li>Ability to wear multiple hats is key, especially in an early-stage startup</li>
            <li>UI/UX design can be a big differentiator</li>
            <li>Language was an important accessibility factor as we entered the North Indian market - we tackled this gap via our marketing efforts which featured ads in Hindi as well as English</li>
            <li>Leverage B2B interactions and insights for B2C growth</li>
            <li>Insights from user data should guide growth initiatives/pivots</li>
            <li>Working with developers requires empathy and compromise</li>
            <li>EdTech allows room for play and is fulfilling work </li>
        </ul>
        <div className='purple_para'>
            <p>In December 2020, Aristotle app was acquired by BYJU's Think n Learn - India's EdTech Unicorn 🎉</p>
        </div>
    </div>
);



export { Content1, Content2, Content3, 
         Content4, Content5, Content6,
         Content7, Content8 };
