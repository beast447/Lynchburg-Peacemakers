import { useState } from "react";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
// ... existing code ...

function CTA() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "contacts"), {
                name,
                email,
                phone,
                message
            });
            console.log("Document written with ID: ", docRef.id);

            // Reset the form to blank
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <section className="cta">
            <h1 id="CTA" className="cta-title">Contact Us Today and Change The Stats</h1>
            <div className="overlay">
                <form>
                    <h2>Name:</h2>{" "}
                    <input
                        className="contact-input"
                        type="text"
                        name="name"
                        placeholder="Enter Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <h2>Email:</h2>{" "}
                    <input
                        className="contact-input"
                        type="text"
                        name="email"
                        placeholder="Example123@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <h2>Phone:</h2>{" "}
                    <input
                        className="contact-input"
                        type="number"
                        name="phone"
                        placeholder="(123)456-789"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <h2>Message:</h2>{" "}
                    <textarea
                        className="contact-input"
                        type="text"
                        name="message"
                        placeholder="Enter a brief message as to why you are contacting the Lynchburg Peacemakers."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={handleSubmit} className="contact-submit" type="button">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

export default CTA;