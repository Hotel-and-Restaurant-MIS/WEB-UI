import React, { useState, useEffect } from 'react';
import './RoomView.css';
import { MainContent } from '../../components/Maincontent/MainContent.jsx';
import { MassengerIcon } from '../../components/Massenger/Massenger.jsx';
import { Review } from '../../components/Review/Review.jsx';
import { AddReview } from '../../components/Buttons/AddReview/AddReview.jsx';
import { RoomType } from '../../components/Rooms/RoomType.jsx';
import SingleBedImage from '../../images/RoomImages/singlebed.png';
import DoubleBedImage from '../../images/RoomImages/doublebed.png';
import TwinBedImage from '../../images/RoomImages/twinbed.png';
import { Footer } from '../../components/Footer/Footer.jsx';
import "../../Fonts/Fonts.css";
import { roomTypeService } from '../../constants.js';

function RoomsView() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        // Fetch room types and prices
        const fetchRooms = async () => {
            try {
                const response = await roomTypeService.get("/price");
                setRooms(response.data);
            } catch (error) {
                console.error('Error fetching room data:', error);
            }
        };

        fetchRooms();
    }, []);
    console.log(rooms);

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

                {rooms.map(room => (
                    <RoomType
                        key={room.roomTypeName}  // Ensure your data has an id or unique identifier
                        src={room.roomTypeName === 'SINGLE ROOM' ? SingleBedImage :
                            room.name === 'DOUBLE ROOM' ? DoubleBedImage :
                                TwinBedImage} // Map image based on room type name
                        alt={room.roomTypeName}
                        name={room.roomTypeName}
                        price={`LKR ${room.pricePerDay}.00 Avg/Night`}
                    />
                ))}
                <Review />
                {/* <NavArrow /> */}
                <AddReview />
            </section>
            <MassengerIcon />
            <Footer />
        </div>
    );
}

export default RoomsView;
