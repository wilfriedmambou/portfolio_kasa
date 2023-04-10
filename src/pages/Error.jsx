import { useRouteError } from 'react-router-dom';
import '../styles/error.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useEffect } from 'react';

function ErrorPage() {
   const error = useRouteError();
   useEffect(() => {
      document.title = `Kasa | ${error.statusText}`;
   }, [error]);
   return (
      <div className="ks-container-error">
         <Header />
         <div id="ks-error-page">
            <h1 className="ks-status-error">{error.status}</h1>
            <h2 className="ks-message-error">
               Oups! La page que vous demandez n'existe pas.
            </h2>
            <div className="ks-return">
               <Link to="/" className="ks-return-link">
                  Retourner sur la page d’accueil
               </Link>
            </div>
         </div>
      </div>
   );
}

export default ErrorPage;
