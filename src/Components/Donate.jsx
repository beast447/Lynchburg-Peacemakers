// Desc: This is the donate page for the Lynchburg Peacemakers website. 
// It contains a picture of the organizations Cashapp QR code but will soon be an area for stripe payments.


import DonateImage from "../assets/donate.jpg";

function Donate(){
    return(
        <div id="Donate" className="donate">
            <h1>Donate Today</h1>
            <img className="donate-img" src={DonateImage} alt="Donate"/>
            <h2>We are now also accepting mailed checks or money orders at:</h2>
            <h3>Lynchburg Peacemakers Inc. 1601 12th Street, Lynchburg, VA, 24501</h3>
            <h3>Or, donate to us via PayPal utilizing the button below</h3>
            <button 
            type="button" 
            onClick={() => window.open("https://www.paypal.com/paypalme/LynchburgPeacemakers")}
            className="paypal-button">Click here to be taken to PayPal</button>
        </div>
    );
}
 export default Donate;