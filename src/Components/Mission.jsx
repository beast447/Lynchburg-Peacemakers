// Desc: Mission statement component for the website.
// It contains the mission statement and the logo with some hover effects added in index.css

import mission from '../assets/logo.jpg';

function Mission() {
    return(
<<<<<<< HEAD
        <div id="Mission" className="mission-card">
=======
        <div className="mission-card">
>>>>>>> dfe3d6552db3f3cba18efd422ac6b6f3300db809
            <img className="mission-card-img" src={mission} alt="Peacemakers logo"></img>
            <h1 className="mission-title">Our Mission</h1>
            <p className="mission-para">The Lynchburg Peacemakers mission is to prevent conflicts from escalating into violent acts by providing people with the knowledge and skills needed to resolve disputes peacefully.
                The Peacemakers conflict resolution program involves increasing problem solving and conflict mediation skills as well as providing community patrols.</p>
        </div>
    );
}

export default Mission;