import Grand from '../assets/Grand.png';
import Cotton from '../assets/Cotton.png'; 
import Kroger from '../assets/Kroger.svg';
import Wired from '../assets/Wired.png';
import AMA from '../assets/ama.png';
import Auto from '../assets/auto.png';
import Sams from '../assets/sams.png';
import GLTC from '../assets/gltc.png';
import Lowes from '../assets/lowes.jpeg';
import Walmart from '../assets/walmart.svg'; 
import Hope from '../assets/hope.png';
import Sherwin from '../assets/sherwin.png'; 
import Sounds from '../assets/sounds.webp';
import Freedom from '../assets/freedom.png';

function Sponsors() {
    return (
        <>
        <div id="supporter-heading">
            <h1>A connected community is a safer community</h1>
            <h2>Thank you to our sponsors</h2>
        </div>
        <div id="supporter-container">
            <img className="supporter" src={Grand}></img>
            <img className="supporter" src={Cotton}></img>
            <img className="supporter" src={Kroger}></img>
            <img className="supporter" src={Wired}></img>
            <img className="supporter" src={AMA}></img>
            <img className="supporter" src={Auto}></img>
            <img className="supporter" src={Sams}></img>
            <img className="supporter" src={GLTC}></img>
            <img className="supporter" src={Lowes}></img>
            <img className="supporter" src={Walmart}></img>
            <img className="supporter" src={Hope}></img>
            <img className="supporter" src={Sherwin}></img>
            <img className="supporter" src={Sounds}></img>
            <img className="supporter" src={Freedom}></img>
        </div>
        </>
    )
}

export default Sponsors;