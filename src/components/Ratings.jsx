import GreyStar from './GreyStar';
import RedStar from './RedStar';
import '../styles/ratings.css';

function Ratings({ content }) {
   const starsArray = [];
   for (let i = 0; i < 5; i++) {
      i < content ? starsArray.push('red') : starsArray.push('grey');
   }

   return (
      <div className="ks-stars-container">
         {starsArray.map((star, i) =>
            star === 'red' ? <RedStar key={i} /> : <GreyStar key={i} />
         )}
      </div>
   );
}

export default Ratings;
