import './content.scss'
import header_img from '../../assets/Distractors/header_img.jpg'
import img_1 from '../../assets/Distractors/img_1.png'
import img_2 from '../../assets/Distractors/img_2.png'
import img_3 from '../../assets/Distractors/img_3.png'
import img_4 from '../../assets/Distractors/img_4.png'
import img_5 from '../../assets/Distractors/img_5.png'
import img_6 from '../../assets/Distractors/img_6.jpg'
import img_7 from '../../assets/Distractors/img_7.png'
import img_8 from '../../assets/Distractors/img_8.png'




const Content1 = () => (
    <div className="distractorsContent1">
        <p>Pearson’s taxonomy indicates 4 levels of understanding for a student in the learning process. Level 1 being minimal understanding and corresponding to fundamental errors. Level 2 and 3 correspond to more sophisticated errors. Level 4 is getting the accurate understanding.</p>
        <img src= {img_1} alt="img_1"/>
        
    </div>
);

const Content2 = () => (
    <div className="distractorsContent2">
        <p>Corresponding to the levels of understanding, I listed down errors that the product could identify as a learning gap.</p>
        <img src= {img_2} alt="img_2"/>
    </div>
);

const Content3 = () => (
    <div className="distractorsContent3">
        <p>Corresponding to the learning gaps listed, I created a framework of the response to be shared in the problem solving interaction and elements of further remediation.</p>
        <img src= {img_3} alt="img_3"/>
    </div>
);

const Content4 = () => (
    <div className="distractorsContent4">
        <p><strong>LOW FIDELITY VERSION</strong></p>
        <p>The experience involved a high degree of hand-holding the student through-out the problem solving process and manual input of values.</p>
        <div className='pair-dis'>
            <img src= {img_4} alt="img_4"/>
            <img src= {img_5} alt="img_5"/>
        </div>
        <p><strong>HIGH FIDELITY VERSION</strong></p>
        <p>Simplified experience with a multiple choice question format for each step. We are able incorporate 3 distractors per step and limit the number of inputs to be programmed. The result screen also helps the students clearly identify areas of improvement.</p>
        <div className='twobythree'>
            <div className='small'>
                <img src= {img_6} alt="img_6"/>
            </div>
            <div className='large'>
                <img src= {header_img} alt="header_img"/>
            </div>
            
            
        </div>
    </div>
);

const Content5 = () => (
    <div className="distractorsContent5">
        <p>Every question can have 3 distractors. From our list, 3 learning gaps are chosen and used by a subject matter expert to create the corresponding distractors. 1 from each level or the most appropriate combination of gaps is used. </p>
        <p>Below is an example with each learning gap mapped to its corresponding distractor.</p>
        <img src= {img_7} alt="img_7"/>
    </div>
);
const Content6 = () => (
    <div className="distractorsContent6">
        <p>Since each distractor is mapped to a learning gap, and the UX design allows us to identify the different learning gaps during a student’s solving process, the product is able to provide personalised remediation. This would be implemented as additional info in-context of the solving experience and the concepts with gaps will show up as specifically recommended learning modules on the home screen.</p>
        <img src= {img_8} alt="img_8"/>
    </div>
);

export { Content1, Content2, Content3, Content4, Content5, Content6 };
