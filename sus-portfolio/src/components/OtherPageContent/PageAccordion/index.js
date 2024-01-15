import './index.scss'
import TitleMenu from '../TitleMenu';
import ContentSection from '../PageContent';
const PageAccord = ({items, text_color}) => (
    <div className="pa-container">
        <div className="acord-container">
            <div className='sticky'>
            <TitleMenu items ={items} text_color={text_color} />
            </div>
        </div>
        <div className="content-container">
            <ContentSection items ={items}/>
        </div>
    </div>
);


export default PageAccord