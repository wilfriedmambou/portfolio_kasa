import '../styles/footer.css';
import footerLogo from '../assets/footerLogo.svg';

function Footer() {
   return (
      <div className="ks-footer-container">
         <img src={footerLogo} alt="logo-kasa-white" />
         <h4 className="ks-copyright-txt">© 2020 Kasa. All rights reserved</h4>
      </div>
   );
}

export default Footer;
