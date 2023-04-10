import { useState } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import '../styles/carrousel.css';

function Carrousel({ pictures }) {
   const length = pictures.length;
   const [currentPicture, setCurrentPicture] = useState(0);

   const slidePrev = () => {
      setCurrentPicture(currentPicture !== 0 ? currentPicture - 1 : length - 1);
   };

   const slideNext = () => {
      setCurrentPicture(currentPicture !== length - 1 ? currentPicture + 1 : 0);
   };

   return (
      <div className="ks-carrousel">
         <BsChevronLeft className="ks-left-arrow" onClick={slidePrev} />
         <BsChevronRight className="ks-right-arrow" onClick={slideNext} />

         <img
            className="ks-cover-image-locations"
            src={pictures[currentPicture]}
            alt="gallery"
         />
         <span className="ks-counter">
            {currentPicture + 1}/{length}
         </span>
      </div>
   );
}

export default Carrousel;
