import './content.scss'
import img_1 from '../../assets/ideodia/img_1.png'
import img_2 from '../../assets/ideodia/img_2.png'
import img_3 from '../../assets/ideodia/img_3.svg'
import img_4 from '../../assets/ideodia/img_4.webp'

const Content1 = () => (
    <div className="ideodia_content1">
        <p>IDEO was approached by the marketing team of a pharmaceutical giant which a goal to transform the top-of-the-funnel experience of the product and brand in one that is more patient-centric.</p>
        <p>As a global brand, some of their main challenges were related to creating a consistent experience worldwide, while also adhering to different legal guidelines, for example with data consent, in different markets. Internally, our team also faces constraint from not being able to redesign certain key features that were deemed out-of-scope.</p>
        <img src={img_1} alt=""/>
        <p>Interviews were conducted with patients with diabetes and health-care providers from different parts of the global market. </p>
        <div className='squile1'>
            <img src={img_2} alt=""/>
        </div>
    </div>
);

const Content2 = () => (
    <div className="ideodia_content2">
        <p>Our research synthesis was a rigorous week-long process that involved studying journey maps, myriad of interview notes and deliberations from different perspectives. We finally arrived at core insights revolving around - </p>
        <div className='yello_para'>
            <p>Lack of clarity<br/>Lack of trust &<br/>Lack of awareness</p>
        </div>
        <p>The project mid-point review was a co-designing workshop that was aimed at arriving at prioritized touch points where the experience could be reimagined. We identified 3 key user flows.</p>
        <img src={img_3} alt=""/>
    </div>

);

const Content3 = () => (
    <div className="ideodia_content3">
        <div className='greenrect'>
            <img src={img_4} alt=""/>
        </div>
        <p>As an interaction designer, I mainly owned the design and iteration of low and high fidelity prototypes of the reimagined experience. Each of the 3 user flows had a unique design focus which I implemented in the following way - </p>
        <p>Discovery - Amplified clarity & guided support </p>
        <p>Onboarding - Gaining consent & trust</p>
        <p>Ongoing - Improved troubleshooting leveraging self-serve & personalization in continued learning</p>
        <div className='squile2'>
            <img src={img_2} alt=""/>
        </div>
    </div>

);




export { Content1, Content2, Content3};
