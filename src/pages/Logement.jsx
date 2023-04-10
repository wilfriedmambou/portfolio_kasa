import Layout from '../components/Layout';
import Carrousel from '../components/Carrousel';
import HostProfile from '../components/HostProfile';
import Ratings from '../components/Ratings';
import Tags from '../components/Tags';
import Dropdown from '../components/Dropdown';
import { useLoaderData } from 'react-router-dom';
import '../styles/logement.css';
import { useEffect } from 'react';

function Logement() {
   //récupère la data créer à partir du loader dans la route
   const data = useLoaderData();
   const {
      description,
      equipments,
      host,
      location,
      tags,
      rating,
      pictures,
      title,
   } = data.logement;

   useEffect(() => {
      document.title = `Kasa | ${title}`;
   }, [title]);

   return (
      <Layout>
         <main className="ks-container-locations">
            <Carrousel pictures={pictures} />
            <h1 className="ks-title-of-location">{title}</h1>
            <h2 className="ks-place-of-location"> {location}</h2>

            <div className="ks-rating">
               <div className="ks-profileAndRating">
                  <HostProfile name={host.name} picture={host.picture} />
                  <Ratings content={parseInt(rating)} />
               </div>
               <Tags tags={tags} />
            </div>

            <section className="ks-details-container">
               <Dropdown
                  title="Description"
                  content={description}
                  nameOfClass="ks-dropdown"
               />
               <Dropdown
                  title="Équipements"
                  content={equipments}
                  nameOfClass="ks-dropdown"
               />
            </section>
         </main>
      </Layout>
   );
}

export default Logement;
