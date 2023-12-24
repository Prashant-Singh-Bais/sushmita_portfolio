import './index.scss';
import catGif from '../../assets/cat.gif'
const ComingSoon = () => {
    return (
        <div className="ComingSoon-container">
            <h1>Coming Soon...</h1>
            <div className='gif-container'>
                <img src={catGif} alt="soon"/>
            </div>
        </div>
    )
}

export default ComingSoon;