import React from "react";


export default function Contact(props) {

    return (
        <section className="contact">
            <h2 className="u-margin-bottom-l">Talk to a trusted agent</h2>
            <form className="form">
                <h3 className="form__header">We are eager to help</h3>
                <p className="form__text">Fill out the form below and one of our agents will reach out to you shortly</p>

                <div className="form__group">
                    <input type="text" id="fName" name="fName" className="form__input" placeholder="First Name" required />
                    <label htmlFor="fName" className="form__label">First Name</label>
                </div>

                <div className="form__group">
                    <input type="text" id="lName" name="lName" className="form__input" placeholder="Last Name" required />
                    <label htmlFor="lName" className="form__label">Last Name</label>
                </div>
                
                <div className="form__group">
                    <input type="text" id="number" name="number" className="form__input" placeholder="Phone Number" required />
                    <label htmlFor="number" className="form__label">Phone Number</label>
                </div>

                <div className="form__group">
                    <input type="email" id="email" name="email" className="form__input" placeholder="Email Address" required />
                    <label htmlFor="email" className="form__label">Email Address</label>
                </div>

                <textarea id="message" name="message" rows="8" className="form__message" placeholder="Hi, I'm looking to buy a new home..." required></textarea>
                <button type="submit" className="form__btn">Send Message</button>
            </form>
        </section>
    );
}