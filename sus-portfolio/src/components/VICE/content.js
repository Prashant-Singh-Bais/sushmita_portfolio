import './content.scss'
import StLine from '../Shapes/StLines'
import img_1 from '../../assets/VICE/img_1.svg'
import img_2 from '../../assets/VICE/img_2.svg'
import img_3 from '../../assets/VICE/img_3.svg'
import img_4 from '../../assets/VICE/img_4.png'
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
        <p>We began by trying to understand the challenge more deeply, in conversations with VICE VP of Global Design & Global SVP of Insights along with preliminary research on Activism @ VICE</p>
        <img src= {img_1} alt="img_1"/>
    </div>
);

const Content2 = () => (
    <div className="Content2">
        <p>We designed our process to dive deep into young people’s motivations, fears, hopes, and experiences. We spoke for hours with Gen Z and millennials from all over the world to gain diverse perspectives on our challenge.</p>
        <div className='temp_heading'>
            <h2>Research Objectives </h2>
        </div>
        <StLine type='green'/>
        <div className='pair'>
            <div className='short'>
            <h2>Youth’s interpretation of activism</h2>
            </div>
            <div className='long'>
            <p>To better define the project’s north star</p>
            </div>
        </div>
        <div className='pair'>
            <div className='short'>
                <h2>Motivations and hesitations</h2>
            </div>
            <div className='long'>
                <p>To identify the entry points to our intervention</p>
            </div>
        </div>
        <div className='pair'>
            <div className='short'>
                <h2>dynamic between real VS. digital identities</h2>
            </div>
            <div className='long'>
                <p>To understand how to create safe spaces digitally and confirm relevance</p>
            </div>
        </div>
        <div className='pair'>
            <div className='short'>
                <h2>Role of media in activism & perception of VICE’s role</h2>
            </div>
            <div className='long'>
                <p>To understand the role Vice can play in engaging youth on activism</p>
            </div>
        </div>
        <div className='pair'>
            <div className='short'>
                <h2>Influence of media in identity formation</h2>
            </div>
            <div className='long'>
                <p> To understand the role Vice can play in formulating and protecting youth’s identity</p>
            </div>
        </div> 
        <img src= {img_2} alt="img_2"/>
        
    </div>
);

const Content3 = () => (
    <div className="Content3">
        <img src= {img_3} alt="img_3"/>
        <div className='temp_heading'>
            <h2>Learnings </h2>
        </div>
        <StLine type='green'/>
        <div className='pair'>
            <div className='long'>
                <h2>THE GENZ SELF-IDENTITY IS ALWAYS EVOLVING</h2>
                <p><ul>
                <li>"Its good to experiment and always be in a state of learning"</li>
                <li>"Feeling of belonging to two places on the planet- Growing wings Bringing growth back home Not to lose touch - roots"</li>
                </ul></p>
                <h2>GENZ DIGITAL IDENTITY IS AN EXTENSION OF IRL</h2>
                <p><ul>
                <li>"As long as I’m wearing a hoodie - I got it"</li>
                <li>"My online life is an extension of my real self - on my social media I'm more perfect but sometimes the weirdness pierces through"</li>
                </ul></p>
                <h2>The VICE BRAND ENDURES</h2>
                <p><ul>
                <li>"It's not trying hard. You can like or dislike it - but you can't ignore it"</li>
                <li>"I like the way they write. Interesting titles”</li>
                </ul></p>
                <h2>TRUST HINGES who follows who</h2>
                <p><ul>
                <li>"All my friends follow VICE"</li>
                <li>"There is a level of mistrust, but it sounds official as they have a lot of followers, and I want to believe it."</li>
                </ul></p>
            </div>
            <div className='short'>
                <img src= {img_4} alt="img_4"/>
            </div>
        </div>
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
