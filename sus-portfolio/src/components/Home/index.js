import Ellipse from '../Ellipse';
import Sidebar from '../Sidebar';
import Text from '../Text';
import './index.scss';

const Home = () => {
    return (
    <div className="main-container"> 
    <Sidebar /> 
    <Ellipse /> 
    <Text/>
    </div>
    )
}


export default Home;