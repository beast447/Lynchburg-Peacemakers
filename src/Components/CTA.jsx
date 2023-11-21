//      Desc: This is the CTA component. It contains the call to action form for the user to contact the Lynchburg Peacemakers.
//      It also contains the code to push the form data to the Firebase database.
//      The form data is stored in the Firebase database under the "contacts" collection.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO4Kbprc4cTDAy_Z6ZOC5KMNIhMAzHlTU",
  authDomain: "lynchburg-peacemakers.firebaseapp.com",
  databaseURL: "https://lynchburg-peacemakers-default-rtdb.firebaseio.com",
  projectId: "lynchburg-peacemakers",
  storageBucket: "lynchburg-peacemakers.appspot.com",
  messagingSenderId: "465119479543",
  appId: "1:465119479543:web:e87acb71673257c68b35f2",
  measurementId: "G-XN49YZ0ZPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function CTA() {
    const handleSubmit = (event) => {
        event.preventDefault();

        // Get the form data
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const message = event.target.message.value;

        // Create a reference to the desired location in your Firebase database
        const databaseRef = firebase.database().ref('contacts');

        // Push the form data to the database
        databaseRef.push({
            name,
            email,
            phone,
            message,
        });

        // Reset the form
        event.target.reset();
    };

    return (
        <section className="cta">
            <div className="cta-content">
                <h1>
                    Stop waiting.<br />
                    Start Helping.
                </h1>
                <h2><em>Contact the Peacemakers Today and Change the Stats</em></h2>
                <p>
                    Let's Get Started!
                </p>
            </div>
            <div className="overlay">
                <form onSubmit={handleSubmit}>
                    <h2>Name:</h2> <input className="contact-input" type="text" name="name" placeholder="Enter Full Name" required />
                    <h2>Email:</h2> <input className="contact-input" type="text" name="email" placeholder="Example123@gmail.com" required />
                    <h2>Phone:</h2> <input className="contact-input" type="text" name="phone" placeholder="(123)456-789" required />
                    <h2>Message:</h2> <textarea className="contact-input" type="text" name="message" placeholder="Enter a brief message as to why you are contacting the Lynchburg Peacemakers."/>
                    <button className="contact-submit" type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default CTA;