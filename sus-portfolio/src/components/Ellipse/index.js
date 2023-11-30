import './index.scss'

import Ellipse1 from '../../assets/Ellipse1_img.png'
import Ellipse2 from '../../assets/Ellipse2_img.png'

const Ellipse = () => (
    <div className = "Ellipse">
        <div className="circle-container">
            <img src= {Ellipse1} alt="Circular"/>
        </div>
        <div className="static-circle">
            <img src= {Ellipse2} alt="Static Circle"/>
        </div>
    </div>
    

    
)
export default Ellipse