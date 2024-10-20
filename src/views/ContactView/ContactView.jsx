import React from "react";
import "./ContactView.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { MassengerIcon } from "../../components/Massenger/Massenger";
import { Footer } from "../../components/Footer/Footer.jsx";
import MainMap from "../../components/Map/MainMap.jsx";
import "../../Fonts/Fonts.css";
function ContactView() {
    return (
        <div className="contact-container">
            <div className="contact-main-cont">
                <Navbar />
            </div>
            <div className="contact-name">CONTACT US</div>
            <div className="contact-content-description">
                <h1>WE ARE HERE FOR YOU</h1>
                <p>
                    {" "}
                    At Luxury Hotels, we take our customers seriously. Do you have any
                    enquiries, complaints or requests,{" "}
                </p>
                <p>
                    please forward it to our support desk and we will get back to you as
                    soon as possible.
                </p>
            </div>
            <div className="contact-content">
                <div className="contact-content-details">
                    <div>Colombo, Sri Lanka</div>
                    <div className="location-navigate-name">
                        <span>Locate Us Here</span>
                        <img
                            src={require("../../images/arrow.png")}
                            alt="arrow"
                            style={{ height: 10, paddingLeft: 20, width: 30 }}
                        />
                    </div>
                    <div className="map-container">
                        <MainMap />
                    </div>
                    <div>
                        Phone: +94 112 345 678 <br />
                        Email: luxury_hotels@gmail.com
                    </div>
                </div>
                <MassengerIcon />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default ContactView;
