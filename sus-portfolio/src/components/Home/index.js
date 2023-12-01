import Ellipse from '../Ellipse';
import Sidebar from '../Sidebar';
import HomeBody from '../HomeBody';
import './index.scss';

const Home = () => {
    return (
        <div className="main-container">
                <Ellipse />
                <HomeBody/>
        </div>
    )
}



export default Home;