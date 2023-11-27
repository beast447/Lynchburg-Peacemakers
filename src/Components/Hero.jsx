
/**
 * This is the Hero component that displays the hero section of the Lynchburg Peacemakers website.
 * It includes an image of the Lynchburg Peacemakers HQ, an image of conflict mediation, and a title.
 */

import HeroBackground from "../assets/hero.jpg";
import Squash from "../assets/squash.png";
import Title from "../assets/title.png";
import Overcome from "../assets/overcome.png";

function Hero() {
    return (
        <div id="Hero" className="hero">
            <img className="title" src={Title} alt="A picture of the Lynchburg Peacemakers logo"/>
            <img className="squash" src={Squash} alt="A picture of two mens argument being mediated by another man"/>
            <img className="overcome" src={Overcome} alt="A picture of a man overcoming a conflict"/>
        </div>
    );
}

export default Hero;