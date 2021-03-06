import React from 'react';
import './BusinessCard.css';

const BusinessCard = () => {
  return (
    <section aria-labelledby="about_description" className="card_container">
      <img
        className="avatar"
        src="https://pbs.twimg.com/profile_images/825098485254983680/mfgLMy_R_400x400.jpg"
      />
      <h1>John Doe</h1>
      <p className="job">Frontend Developer</p>
      <a className="website_link">JohnDoe.website</a>
      <address>
        <a
          className="email_fake-button"
          href="mailto:JohnDoe@personal_johndoe_domain.com"
        >
          📧 Email me
        </a>
      </address>
      <div className="about_section">
        <h2>About</h2>
        <p id="about_description">
          Hi, i'm John Doe and this is a business-card meme
        </p>
        <h2>Interests</h2>
        <p>I believe i learned something about react after this tutorial</p>
      </div>
      <ul>
        <li>
          <a href="">
            <img src="https://www.pinclipart.com/picdir/middle/250-2508896_social-twitter-outline-svg-png-icon-free-download.png" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="https://www.pinclipart.com/picdir/middle/250-2508896_social-twitter-outline-svg-png-icon-free-download.png" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="https://www.pinclipart.com/picdir/middle/250-2508896_social-twitter-outline-svg-png-icon-free-download.png" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="https://www.pinclipart.com/picdir/middle/250-2508896_social-twitter-outline-svg-png-icon-free-download.png" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="https://www.pinclipart.com/picdir/middle/250-2508896_social-twitter-outline-svg-png-icon-free-download.png" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default BusinessCard;
