import "./index.scss"
const Header = ({
    heading1, 
    heading2,
    header_img,
    myrole, myrolelist,
    skills, // this should be a dict containing key as skill name and value as img 
    collaborators // list of names
  }) => (
    <div className="HeaderDark">
      <div className="header-content">
        <div className="header-texts">
          {heading1 && <h1>{heading1}</h1>}
          {heading2 && <h2>{heading2}</h2>}
        </div>
          <div className="header-image">
            <img src={header_img} alt="Header" />
          </div>
      </div>
      
      <div className="describe_container">
      {myrole && (
            <div className="myrole">
            <h3>My Role</h3>
            {myrole && <p>{myrole}</p>}
            <ul>
                {myrolelist.map((myrole_, index) => (
                <li key={index}>{myrole_}</li>
                ))}
            </ul>
            </div>
        )}
        
        {skills && (
            <div className="skills">
            <h3>Skills</h3>
            {Object.entries(skills).map(([skillName, skillImg]) => (
                <div key={skillName} className="skill">
                <img src={skillImg} alt={skillName} />
                <span>{skillName}</span>
                </div>
            ))}
            </div>
        )}
        {collaborators && (
            <div className="collaborators">
            <h3>Collaborators</h3>
            <ul>
                {collaborators.map((collaborator, index) => (
                <li key={index}>{collaborator}</li>
                ))}
            </ul>
            </div>
        )}
        </div>
    </div>
  );
  

export default Header
