import './content.scss'
import img_1 from '../../assets/thinkplace/img_1.png'
import img_2 from '../../assets/thinkplace/img_2.png'
import img_3 from '../../assets/thinkplace/img_3.png'
import img_4 from '../../assets/thinkplace/img_4.png'
import img_5 from '../../assets/thinkplace/img_5.png'

const Content1 = () => (
    <div className="thinkplace_content1">
        <p>Volunteering Australia received funding from the Government to lead a new National Strategy for Volunteering. The previous NSV was developed through limited consultation and was never implemented. Since then, the volunteering ecosystem faced a hollowing policy vacuum. Faced with these challenges, VA approached ThinkPlace with the challenge:</p>
        <div className='purple_para'>
            <p>How can we undertake a co-design process to build the new National Strategy for Volunteering – one which allows anyone engaged with volunteering to have a meaningful say? </p>
        </div>
        <p>ThinkPlace responded with an innovative, <strong>participatory futures approach</strong>–inviting community partnership to build a bold vision for volunteering's future, and balancing different perspectives to create a tangible plan for the future.</p>
    </div>
);

const Content2 = () => (
    <div className="thinkplace_content2">
        <p>The design journey took 12 months. We started with 'Discovery', involving mixed methods research to build an evidence-base. 'Visioning' was at the heart of the process. This is where I was mainly involved. </p>
        <div className='contentImage'>
            <img src= {img_1} alt="img_1"/>
        </div>
        <p>The workshop had 3 main segments</p>
        <p>CEBREAKER - Futures Four Square : How do you feel about the future? Its getting worse or better X I feel powerful or powerless</p>
        <div className='contentImage'>
            <img src= {img_2} alt="img_2"/>
        </div>
        <p>ARTIFACTS FROM THE FUTURE - Provocation about the future is shared with the group</p>
        <div className='contentImage'>
            <img src= {img_3} alt="img_3"/>
        </div>
        <p>ARTIFACTS FROM THE FUTURE - Provocation about the future is shared with the group</p>
        <div className='contentImage'>
            <img src= {img_4} alt="img_4"/>
        </div>
        <div className='contentImage'>
            <img src= {img_5} alt="img_5"/>
        </div>
        <p>Through community workshops across Australia, we invited volunteers and local organizations to shape the vision for volunteering's future. Their ideas were synthesized into a 10-year vision. </p>
        <p>Framed by the vision and other insights from Visioning workshops, the Core Design Team built an actionable plan through co-design.</p>
    </div>
);

const Content3 = () => (
    <div className="thinkplace_content3">
        <p>As a 10-year strategy in early implementation, full impact will be observed in time. So far, the most critical impact is how it brought together stakeholders across an expansive ecosystem around a unifying 10-year agenda. The connections forged have never before been observed in a group of this size. The design means implementation is taking place across levels. </p>
        <p>Organizations can use the NSV to evaluate and improve their own programs and activities. This has been a recurring piece of acclaim. As one of the first examples of national strategies being designed this way, we attracted great interest domestically and internationally.</p>
    </div>

);




export { Content1, Content2, Content3};
