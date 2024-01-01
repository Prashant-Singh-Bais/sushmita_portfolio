import './index.scss'
import React from 'react';


// const Accordion = ({ title, children }) => {
//     const [isClose, setIsOpen] = useState(true);
    

//     return (
//         <div className="accordion">
//             <div className="accordion-header" onClick={() => setIsOpen(!isClose)}>
//                 {title}
//                 <span className="accordion-toggle">{isClose ? '-' : '+'}</span>
//             </div>
//             {isClose && <div className="accordion-body">{children}</div>}
//         </div>
//     );
// };

// export default Accordion;

const Accordion = ({ title, children }) => {
    return (
        <div className="accordion">
            <div className="accordion-header">
                {title}
            </div>
            <div className="accordion-body">{children}</div>
        </div>
    );
};

export default Accordion;


