import Card from './Card';
import '../styles/cards.css';

function Cards({ data }) {
   return (
      <main className="ks-card-container">
         {data.map((card) => (
            <div key={card.id} className="ks-location-elt">
               <Card title={card.title} src={card.cover} id={card.id} />
            </div>
         ))}
      </main>
   );
}

export default Cards;
