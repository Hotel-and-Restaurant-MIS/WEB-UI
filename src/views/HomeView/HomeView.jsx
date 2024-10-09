import React from 'react';
import './HomeView.css';
import { MainContent } from '../../components/Maincontent/MainContent.jsx';
import { MassengerIcon } from '../../components/Massenger/Massenger.jsx';
import { Review } from '../../components/Review/Review.jsx';
import { Explore } from '../../components/Buttons/Explore/Explore.jsx';
import { AddReview } from '../../components/Buttons/AddReview/AddReview.jsx';
// import { NavArrow } from '../../components/NavArrow/NavArrow.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import "../../Fonts/Fonts.css";


function HomeView() {
    return (
        <div className="home-main-cont">
            <section className="home-hero-section">
                <MainContent />
            </section>
            <section>
                <h1 className='home-h1'>All our room types are including complementary breakfast</h1>
                <div className='home-container'>
                    <div className='home-container-cont'>
                        <h1>Luxury redefined</h1>
                        <p>Our rooms are designed to transport
                            you into an environment made for leisure.
                            Take your mind off the day-to-day of home
                            life and find a private paradise for yourself.</p>
                        <Explore />
                    </div>
                    <div className='home-container-img'>
                        <img src={require('../../images/room.png')} alt="room-img" />
                    </div>
                </div>
                <div className='home-container'>
                    <div className='home-container-cont'>
                        <h2>Leave your worries in </h2>
                        <h2>the sand</h2>
                        <br />
                        <p>We love life at the beach. Being close
                            to the ocean with access to endless sandy
                            beach ensures a relaxed state of mind. It
                            seems like time stands still watching the
                            ocean. </p>
                        <Explore />
                    </div>
                    <div className='home-container-img'>
                        <img src={require('../../images/beach.png')} alt="room-img" />
                    </div>
                </div>
                <Review />
                {/* <NavArrow /> */}
                <AddReview />
                <Footer />
            </section>
            <MassengerIcon />
        </div>
    );
}


export default HomeView;