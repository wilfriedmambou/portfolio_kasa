import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

function Nav() {
   let activeClassName = 'ks-underline';
   return (
      <nav className="ks-navbar">
         <ul>
            <li>
               <NavLink
                  to="/"
                  className={({ isActive }) =>
                     isActive ? activeClassName : undefined
                  }
               >
                  Accueil
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/about"
                  className={({ isActive }) =>
                     isActive ? activeClassName : undefined
                  }
               >
                  À Propos
               </NavLink>
            </li>
         </ul>
      </nav>
   );
}

export default Nav;
