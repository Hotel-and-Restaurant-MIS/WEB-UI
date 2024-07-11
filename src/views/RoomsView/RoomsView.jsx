import React from 'react';
import './RoomView.css';
import { MainContent } from '../../components/Maincontent/MainContent.jsx';
import { MassengerIcon } from '../../components/Massenger/Massenger.jsx';
import { Review } from '../../components/Review/Review.jsx';
import { AddReview } from '../../components/Buttons/AddReview/AddReview.jsx';
import { NavArrow } from '../../components/NavArrow/NavArrow.jsx';
import { RoomType } from '../../components/Rooms/RoomType.jsx';
import SingleBedImage from '../../images/RoomImages/singlebed.png';
import DoubleBedImage from '../../images/RoomImages/doublebed.png';
import TwinBedImage from '../../images/RoomImages/twinbed.png';


function RoomsView() {
    return (
        <div className="room-main-cont">
            <section className="room-hero-section">
                <MainContent />
            </section>
            <section>
                <div className='rooms-cont'>
                    <h1>ROOMS AND RATES</h1>
                    <p>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, </p>
                    <p>comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented </p>
                    <p>by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. </p>
                </div>
                <RoomType src={SingleBedImage} alt="single bed" name="SINGLE ROOM" price="LKR 15000.00  Avg/Night" />
                <RoomType src={DoubleBedImage} alt="double bed" name="DOUBLE ROOM" price="LKR 20000.00  Avg/Night" />
                <RoomType src={TwinBedImage} alt="twin bed" name="TWIN ROOM" price="LKR 25000.00 Avg/Night" />
                <Review />
                <NavArrow />
                <AddReview />
            </section>
            <MassengerIcon />
        </div>
    );
}

export default RoomsView;