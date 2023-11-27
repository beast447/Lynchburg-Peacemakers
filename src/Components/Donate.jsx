// Desc: This is the donate page for the Lynchburg Peacemakers website. 
// It contains a picture of the organizations Cashapp QR code but will soon be an area for stripe payments.


import DonateImage from "../assets/donate.jpg";

function Donate(){
    return(
        <div id="Donate" className="donate">
            <h1>Donate Today</h1>
            <img className="donate-img" src={DonateImage} alt="Donate"/>
        </div>
    );
}
 export default Donate;