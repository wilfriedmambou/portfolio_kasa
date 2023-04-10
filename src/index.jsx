import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import ErrorPage from './pages/Error';
import logements from './datas/logements';

function loader({ params }) {
   // cette fonction permet de charger la data en créant une erreur 404 s'il n'y a pas
   // d'id correspondant.
   const logement = logements.find((logement) => logement.id === params.id);
   if (logement === undefined) {
      throw new Response('Not Found', { status: 404 });
   }
   //retourne la data
   return { logement };
}

const router = createHashRouter([
   {
      path: '/',
      element: <Home logements={logements} />,
      errorElement: <ErrorPage error={null} />,
   },
   {
      path: '/about',
      element: <About />,
   },
   {
      path: '/logement/:id',
      element: <Logement />,
      //load data & throw error
      loader: loader,
      errorElement: <ErrorPage />,
   },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
