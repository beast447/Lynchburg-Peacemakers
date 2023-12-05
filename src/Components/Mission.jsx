// Desc: Mission statement component for the website.
// It contains the mission statement and the logo with some hover effects added in index.css

import mission from '../assets/logo.jpg';
import { useState } from 'react';

function Mission() {
    
    const [isFlipped, setIsFlipped] = useState(true);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    }
    if (isFlipped === true) {
        return(
            <div id="Mission" className="mission-card-front">
                <h3 className="click-logo">Click the logo to learn more!</h3>
                <img className="mission-card-img" src={mission} onClick={handleCardClick} alt="Peacemakers logo"></img>
                <h1 className="mission-title">Our Mission</h1>
                <p className="mission-para">The mission of Peacemakers Inc. is to cultivate a harmonious society by promoting non-violence
                and conflict resolution through empowerment, education, and community engagement.<br/>
                We are commited to creating a world where individuals and communities can thrive peacefully, free from the impacts of violence.</p>
            </div>
    );
    } else { 
        return(
            <div id="Mission" className="mission-card-back">
                <img className="mission-card-img" src={mission} onClick={handleCardClick} alt="Peacemakers logo"></img>
                <h1 className="services-title">Our Services</h1>
                <div className="services-list">
                    <p>Assist in entering a trade school</p>
                    <p>Assist in entering a higher learning institution</p>
                    <p>Assist in finding employment</p>
                    <p>Assist in finding housing</p>
                    <p>Parental Counseling</p>
                    <p>Conflict Resolution Training</p>
                    <p>CPR and First Aid classes</p>
                </div>
            </div>
        );

    }
}

export default Mission;