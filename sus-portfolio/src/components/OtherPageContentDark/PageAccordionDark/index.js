import './index.scss'
import TitleMenuDark from '../TitleMenuDark';
import ContentSectionDark from '../PageContentDark';
const PageAccordDark = ({items}) => (
    <div className="pa-containerDark">
        <div className="acord-container">
            <div className='sticky'>
            <TitleMenuDark items ={items}/>
            </div>
        </div>
        <div className="content-container">
            <ContentSectionDark items ={items}/>
        </div>
    </div>
);


export default PageAccordDark