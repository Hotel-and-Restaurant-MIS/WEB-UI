import React from 'react';
import './ContactView.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { MassengerIcon } from '../../components/Massenger/Massenger';
import { ContactForm } from '../../components/ContactUs/ContactForm';
import { Footer } from '../../components/Footer/Footer.jsx';
import "../../Fonts/Fonts.css";


function ContactView() {

    return (
        <div>
            <div className="contact-main-cont">
                <Navbar />
            </div>
            <div className='contact-name'>CONTACT US</div>
            <div className='contact-content-description'>
                <h1>WE ARE HERE FOR YOU</h1>
                <p> At Luxury Hotels, we take our customers seriously. Do you have any enquiries, complaints or requests, </p>
                <p>please forward it to our support desk and we will get back to you as soon as possible.</p>
            </div>
            <div className='contact-content'>
                <div className='contact-content-details'>
                    <div>Colombo, Sri Lanka</div>
                    <div style={{ fontFamily: 'Montserrat-bold' }}>View Map
                        <img src={require('../../images/arrow.png')} alt="arrow" style={{ height: 10, paddingLeft: 20, width: 30 }} />
                    </div>
                    <div>Phone: +94 112 345 678   <br />
                        Email: luxury_hotels@gmail.com</div>
                </div>
                <ContactForm />
                <MassengerIcon />
            </div>
            <Footer />
        </div >
    );
}

export default ContactView;