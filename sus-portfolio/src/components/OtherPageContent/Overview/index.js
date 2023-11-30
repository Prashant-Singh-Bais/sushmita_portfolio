import "./index.scss"
const Overview = ({
    overview_heading, 
    overview_img,
  }) => (
    <div className="overview">
        <div className="heading">
            <h4>{overview_heading}</h4>
        </div>
        <div className="overview_img">
            <img src= {overview_img} alt="QnA"/>
        </div>

    </div>
  );
  

export default Overview
