import Ellipse from '../../components/Ellipse';
import HomeBody from '../HomeBody';
import './index.scss';

const Home = () => {
    return (
        <div className="main-container">
            <div className='behind-ellipse'>
                <Ellipse />
            </div>
            <div className="homebody-container">
                    <HomeBody/>
            </div>
        
        </div>

    )
}




export default Home;