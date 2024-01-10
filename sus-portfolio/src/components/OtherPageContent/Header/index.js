// import React from 'react';
import './index.scss';

const Header = ({
  heading1,
  heading2,
  header_img,
  header_img_directon, // could be right of heading1 and heading2 or below heading 1 and heading 2
  myrole,
  skills, // this should be a dict containing key as skill name and value as img
  collaborators, // list of names
}) => (
  <div className="Header">
  <>
  {heading1 !== "" ? (
    <>
      {header_img_directon === 'right' ? 
      (
        <div className="header-content header-content-row">
          <div className="leftcontainer">
            <div className="header-texts">
              {heading1 && <h1>{heading1}</h1>}
              {heading2 && <h2>{heading2}</h2>}
            </div>
            <div className="describe_container">
              {myrole && (
                <div className="myrole">
                  <h3>My Role</h3>
                  {myrole && <p>{myrole}</p>}
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
          {header_img && (
            <div className="header-image">
              <img src={header_img} alt="Header" />
            </div>
          )}
        </div>
      ) : (
        <div className="header-content header-content-column">
          <div className="header-texts">
            {heading1 && <h1>{heading1}</h1>}
            {heading2 && <h2>{heading2}</h2>}
          </div>
          <div className="describe_container">
            {myrole && (
              <div className="myrole">
                <h3>My Role</h3>
                {myrole && <p>{myrole}</p>}
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
          {header_img && (
            <div className="header-image">
              <img src={header_img} alt="Header" />
            </div>
          )}
        </div>
      )}
    </>
  ):(
    <div className="describe_container">
            {myrole && (
              <div className="myrole">
                <h3>My Role</h3>
                {myrole && <p>{myrole}</p>}
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
  )
  }
  </>
</div>


);

export default Header;
