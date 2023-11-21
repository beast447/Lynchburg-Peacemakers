
/**
 * This is the Hero component that displays the hero section of the Lynchburg Peacemakers website.
 * It includes an image of the Lynchburg Peacemakers HQ, an image of conflict mediation, and a title.
 */

import HeroBackground from "../assets/hero.jpg";
import Squash from "../assets/squash.png";

function Hero() {
    return (
        <div className="hero">
            <h1>Lynchburg Peacemakers</h1>
            <img className="squash" src={Squash} alt="A picture of two mens argument being mediated by another man"/>
            <h1>Overcoming Violence through Opportunity</h1>
        </div>
    );
}

export default Hero;