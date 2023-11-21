import Ellipse from '../Ellipse';
import Sidebar from '../Sidebar';
import Text from '../Text';
import './index.scss';

const Layout = () => {
    return (
    <div className="main-container"> 
    <Sidebar /> 
    <Ellipse /> 
    <Text/>
    </div>
    )
}


export default Layout;