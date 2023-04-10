import Header from './Header';
import Footer from './Footer';
import '../styles/layout.css';

function Layout({ children }) {
   return (
      <div className="ks-container">
         <div className="ks-hero">
            <Header />

            {children}
         </div>

         <Footer />
      </div>
   );
}

export default Layout;
