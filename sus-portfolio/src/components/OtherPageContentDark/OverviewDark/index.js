import "./index.scss"
const OverviewDark = ({
    overview_heading, 
    overview_content,
    overview_img,
  }) => (
    <div className="overviewDark">
        <div className="heading">
            <h4>{overview_heading}</h4>
            <p>{overview_content}</p>
        </div>
        <div className="overview_img">
            <img src= {overview_img} alt="QnA"/>
        </div>

    </div>
  );
  

export default OverviewDark;
