import React from 'react';
import './AboutUs.css';
import Person1 from './assets/aadithya.jpeg';
import Person2 from './assets/navya.jpeg';
import Person3 from './assets/sauravi.jpeg';
import Person4 from './assets/shripad.jpg';

function AboutUs() {
  return (
    <div className="about-me">
      <h2>About Us</h2>
      <div className="people-container">
        <div className="person-card">
          <img src={Person1}  />
          <div className="person-details">
            <h2 className="person-name">Aadithya</h2>
          </div>
          <div className="person-name"></div>
        </div>
        <div className="person-card">
          <img src={Person2} alt="Person 2" />
          <div className="person-details">
            <h2 className="person-name">Navya</h2>
          </div>
          <div className="person-name"></div>
        </div>
        <div className="person-card">
          <img src={Person3} alt="Person 3" />
          <div className="person-details">
            <h2 className="person-name">Sauravi</h2>
          </div>
          <div className="person-name"></div>
        </div>
        <div className="person-card">
          <img src={Person4} alt="Person 4" />
          <div className="person-details">
            <h2 className="person-name">Shripad</h2>
          </div>
        </div>
      </div>
      <div className="text-space">
       <h4>
        We, the founding team @freshfix believe that every individual should have easy access & nutricious meals.
        Our combined experience and observations motivated us to start this venture.
        We're young, budding entrepreneurs looking to disrupt the growing D2C food market in india 
        and aim to become a household name.
       </h4>
      </div>
    </div>
  );
}

export default AboutUs;
