import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <section className="home-1" id="home">
        <dev className="home-main-cont">
          <h1>WELCOME TO </h1>
          <h2>LUXURY </h2>
          <h3>HOTELS</h3>
          <p>
            Book your stay and enjoy luxury redefined at the most affordable
            rates.
          </p>
        </dev>
        <button className="book-now">Book Now</button>
        <div className="scroll-indicator">↓ Scroll</div>
      </section>
      <div className="content">
        <h1>More Content</h1>
        <p>This is additional content that will allow you to scroll down.</p>
        <p>Add more paragraphs or elements to ensure there's enough content to scroll.</p>
        {/* Add more content to ensure scrolling */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        {/* Repeat or add more content as needed */}

        <h1>More Content</h1>
        <p>This is additional content that will allow you to scroll down.</p>
        <p>Add more paragraphs or elements to ensure there's enough content to scroll.</p>
        {/* Add more content to ensure scrolling */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        {/* Repeat or add more content as needed */}
      </div>
    </div>
  );
}

export default Home;
