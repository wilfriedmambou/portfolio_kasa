import Layout from '../components/Layout';
import Banner from '../components/Banner';
import coverAbout from '../assets/coverAbout.png';
import abouts from '../datas/about';
import { useEffect } from 'react';
import Dropdown from '../components/Dropdown';
import '../styles/about.css';

function About() {
   useEffect(() => {
      document.title = 'Kasa | À propos';
   }, []);
   return (
      <Layout>
         <Banner>
            <img className="ks-cover-img" src={coverAbout} alt="background" />
         </Banner>
         <main>
            <div className="ks-dropdown-container">
               {abouts.map((about) => (
                  <Dropdown
                     key={about.title}
                     title={about.title}
                     content={about.content}
                     nameOfClass="ks-dropdown-about"
                  />
               ))}
            </div>
         </main>
      </Layout>
   );
}

export default About;
