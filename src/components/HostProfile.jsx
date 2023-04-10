import '../styles/hostProfile.css';

function HostProfile({ name, picture }) {
   return (
      <div className="ks-profile-container">
         <h4 className="ks-host-name">{name}</h4>
         <img className="ks-profile-picture" src={picture} alt="profile" />
      </div>
   );
}

export default HostProfile;
