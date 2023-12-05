import './content.scss'
import img_1 from '../../assets/SearchQna/img_1.svg'
import img_2 from '../../assets/SearchQna/img_2.svg'
import img_3 from '../../assets/SearchQna/img_3.svg'
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
        <img src= {img_1} alt="img_1"/>
        <p>Following a series of acquisitions, a new division called Learning & Personalization was created with a focus on enhancing engagement. The product leadership conveyed the business need for the following year would be around strengthening the top of the product funnel.</p>
        <img src= {img_2} alt="img_2"/>
        <p>The product team leveraged human-centered design to ideate a new feature. Starting with user needs, based on previous success of Aristotle app’s Forum + Search features, we leveraged the desirability for a platform that instantly answers students’ doubts and questions. Listing desired shifts - </p>
        <img src= {img_3} alt="img_3"/>
        <p>Apart from addressing the top of the funnel need, the Forum feature could also be leveraged to create social network effects to increase engagement and hence the business viability.</p>
        <p>In terms of the technology feasibility, we leveraged already existing Aristotle app’s Search feature with AI capabilities of scanning books or handwritten text to search and Forum which provided the capability of posting questions onto a platform. </p>
        <p>Ideating with lo-fi screens : Byju’s Forum user flow</p>
        <img src= {img_4} alt="img_4"/>
    </div>
);

const Content2 = () => (
    <div className="Content2">
        <p>Using the basic user flow, we broke down the different components of the new feature we were conceptualizing. We presented our initial thinking to different stakeholders - VP of Product from Byju’s core learning app, Head of Sales, Chairman and Founder - and conducted a card sorting activity in order to be able to prioritize feature characteristics and draft a roadmap.</p>
        <img src= {img_5} alt="img_5"/>
        <p>The discussions led us to park the social network concept due to moderation challenges and instead with focussed on -</p>
        <div className = 'img_text'>
            <img src= {img_6} alt="img_6"/>
            <p>A straightforward Search experience where students would be able to enter doubts and receive solutions and recommendations to relevant content such as vVICE lessons.</p>
        </div>
        <div className = 'img_text'>
            <img src= {img_7} alt="img_7"/>
            <p>The engine bringing Search to life would involve being able to automatically recognize and tag questions entered by students in order to provide them the right responses. This would involve AI & LLMs that automate the tagging.</p>
        </div>
        <div className = 'img_text'>
            <img src= {img_8} alt="img_8"/>
            <p>Although the articulation of this concept was unclear, it received enough interest from the stakeholders. From a UX perspective, I was able to incorporate aspects of gamification such as interactive puzzles into the experience.</p>
        </div>
    </div>
);

const Content3 = () => (
    <div className="Content3">
        <p>Although the articulation of this concept was unclear, it received enough interest from the stakeholders. From a UX perspective, I was able to incorporate aspects of gamification such as interactive puzzles into the experience.</p>
        <img src= {img_9} alt="img_9"/>
    </div>
);

const Content4 = () => (
    <div className="Content4">
        <div className='pair'>
            <div className='img_text_vertical'>
                <p>Image search</p>
                <img src= {img_10} alt="img_10"/>
            </div>
            <div className='img_text_vertical'>
                <p>Text search</p>
                <img src= {img_11} alt="img_11"/>
            </div>
        </div>
        <div className='pair'>
            <div className='img_text_vertical'>
                <p>Scenario 1: Exact Match</p>
                <img src= {img_12} alt="img_12"/>
            </div>
            <div className='img_text_vertical'>
                <p>Scenario 2: Similar Match</p>
                <img src= {img_13} alt="img_13"/>
            </div>
        </div>
        <p>Scenario 3: No Match</p>
        <div className='vertical_images'>
            <img src= {img_14} alt="img_14"/>
            <img src= {img_15} alt="img_15"/>
            <img src= {img_16} alt="img_16"/>
        </div>

    </div>
);

const Content5 = () => (
    <div className="Content5">
        <p>After validating the tech, we moved on to re-designing the interaction for Ask-a-doubt, this time with a focus on improving learning outcomes. A few design decisions that echoed this focus -
            <ul>
            <li>Incorporating the Socratic method (a dialogue between teacher and students. The teacher leads by posing thought-provoking questions. Students actively engage by asking questions of their own) We applied the socratic method to create nested interactions with different layers of learning</li>
            <li>Instead of directly answering a student's query, we offer a 'key' - a crucial hint or insight that aids in resolving their doubt without fully explaining the concept, maintaining the spirit of inquiry and self-discovery.</li>
            </ul>
        
        <img src= {img_17} alt="img_17"/>
        <ul>
            <li>‘Solving steps’ were nested in a second layer. This would allow the student to explore the layer of detail that they may be looking for.</li>
            <li>VVICE lessons, proven to improve engagement and learning outcomes, would appear along with the solving steps.</li>
        </ul>
        <div className='vertical_images'>
            <img src= {img_18} alt="img_18"/>
            <img src= {img_19} alt="img_19"/>
            <img src= {img_20} alt="img_20"/>
        </div>
        <ul>
            <li>Once the student reaches the final step, they are quizzed with a similar question. This would be gamified meaning students would earn points for solving the question. At the same time it wold help cement the new learning.</li>
        </ul>
        <div className='vertical_images'>
            <img src= {img_21} alt="img_21"/>
            <img src= {img_22} alt="img_22"/>
            <img src= {img_23} alt="img_23"/>
        </div>
        <ul>
            <li>For questions that were based on memory and concept understanding, student would receive the answer in an interactive true/false format. This would introduce a layer of simplified gamification while bringing the experience of learning by self-discovery to the student</li>
        </ul>
        </p>
        <div className='vertical_images'>
            <img src= {img_24} alt="img_24"/>
            <img src= {img_25} alt="img_25"/>
            <img src= {img_26} alt="img_26"/>
        </div>

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
