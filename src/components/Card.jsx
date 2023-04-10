import { Link } from 'react-router-dom';
import '../styles/card.css';

function Card({ id, title, src }) {
   return (
      <div className="ks-card">
         <Link to={`/logement/${id}`} title={title} className="ks-card-link">
            <img className="ks-card-cover" src={src} alt="location" />
            <p className="ks-title">{title}</p>
         </Link>
      </div>
   );
}

export default Card;
