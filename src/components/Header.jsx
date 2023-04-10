import { Link } from 'react-router-dom';
import Nav from './Nav';
import headerLogo from '../assets/headerLogo.svg';
import '../styles/header.css';

function Header() {
   return (
      <div className="ks-header">
         <Link to="/" title="Home">
            <img className="ks-logo" src={headerLogo} alt="logo-kasa-pink" />
         </Link>
         <Nav />
      </div>
   );
}

export default Header;
