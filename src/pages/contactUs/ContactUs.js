import React, { Fragment } from "react";
import { Map } from "../../components/Map/Map";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Footer } from "../../components/Footer";

export const ContactUs = () => {
    return (
        <div className="blog_container">

            <div className="image_container">

                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <ContactForm/>
            <Map/>
            <Footer />
        </div>
    )
}