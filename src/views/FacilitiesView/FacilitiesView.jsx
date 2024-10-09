import React from 'react';
import './FacilitiesView.css';
import { MainContent } from '../../components/Maincontent/MainContent.jsx';
import { MassengerIcon } from '../../components/Massenger/Massenger.jsx';
import { Review } from '../../components/Review/Review.jsx';
import { AddReview } from '../../components/Buttons/AddReview/AddReview.jsx';
// import { NavArrow } from '../../components/NavArrow/NavArrow.jsx';
import { Locations } from '../../components/Facilities/Locations.jsx';
import GymImage from '../../images/LocationImages/gym.png';
import PoolsidebarImage from '../../images/LocationImages/poolsidebar.png';
import SpaImage from '../../images/LocationImages/spa.png';
import SwimmingpoolsImage from '../../images/LocationImages/swimmingpool.png';
import RestaurantImage from '../../images/LocationImages/restaurant.png';
import LaundryImage from '../../images/LocationImages/laundry.png';
import { Footer } from '../../components/Footer/Footer.jsx';

function FacilitiesView() {
    return (
        <div className="facilities-main-cont">
            <section className="facilities-hero-section">
                <MainContent />
            </section>
            <section>
                <div className='facilities-cont'>
                    <h1>FACILITIES</h1>
                    <p>We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so
                        that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
                        and our modern luxury resort facilities will help you enjoy the best of all. </p>
                </div>
                <Locations src={GymImage} alt="Gym Image" name="THE GYM" />
                <Locations src={PoolsidebarImage} alt="Bar Image" name="POOLSIDE BAR" />
                <Locations src={SpaImage} alt="Spa Image" name="THE SPA" />
                <Locations src={SwimmingpoolsImage} alt="Swimming Pool Image" name="SWIMMING POOL" />
                <Locations src={RestaurantImage} alt="Restaurant Image" name="RESTAURANT" />
                <Locations src={LaundryImage} alt="Laundry Image" name="LAUNDRY" />
                <Review />
                {/* <NavArrow /> */}
                <AddReview />
            </section>
            <MassengerIcon />
            <Footer />
        </div>
    );
}

export default FacilitiesView;