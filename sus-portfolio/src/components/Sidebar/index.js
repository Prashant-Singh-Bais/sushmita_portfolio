import './index.scss'
import { Link } from 'react-router-dom'
import Logos from '../../assets/Slogo.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className = 'logo' to ='/'> 
            <img src = {Logos} alt="logo" />
        </Link>

    </div>
)

export default Sidebar