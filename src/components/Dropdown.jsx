import { useState } from 'react';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import '../styles/dropdown.css';

function Dropdown({ title, content, nameOfClass }) {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div className={nameOfClass}>
         <div className="ks-dropdown-menu" onClick={() => setIsOpen(!isOpen)}>
            <h3 className="ks-dropdown-title">{title}</h3>
            <span className="ks-chevron">
               {isOpen ? <BiChevronUp /> : <BiChevronDown />}
            </span>
         </div>

         {isOpen && (
            <div className="ks-details-items">
               {typeof content === 'string' ? (
                  <span className="ks-description">{content}</span>
               ) : (
                  content.map((elt, index) => <li key={index}>{elt}</li>)
               )}
            </div>
         )}
      </div>
   );
}

export default Dropdown;
