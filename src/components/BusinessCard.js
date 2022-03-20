import React from 'react';
import './BusinessCard.css';

const BusinessCard = () => {
  return (
    <section class="card_container">
      <img src="https://pbs.twimg.com/profile_images/825098485254983680/mfgLMy_R_400x400.jpg" />
      <h1>John Doe</h1>
      <p class="job">Frontend Developer</p>
      <a class="website_link">JohnDoe.website</a>
      <address>
        <a
          class="email_fake-button"
          href="mailto:JohnDoe@personal_johndoe_domain.com"
        >
          📧 Email me
        </a>
      </address>
      <div class="about_section">
        <h2>About</h2>
        <p>John Doe is a meme</p>
        <h2>Interests</h2>
        <p>And so this business card is</p>
      </div>
      <ul>
        <li>
          <img src="https://www.pinclipart.com/picdir/middle/250-2508896_social-twitter-outline-svg-png-icon-free-download.png" />
        </li>
        <li>
          <img src="https://www.pinclipart.com/picdir/middle/250-2508896_social-twitter-outline-svg-png-icon-free-download.png" />
        </li>
        <li>
          <img src="https://www.pinclipart.com/picdir/middle/250-2508896_social-twitter-outline-svg-png-icon-free-download.png" />
        </li>
        <li>
          <img src="https://www.pinclipart.com/picdir/middle/250-2508896_social-twitter-outline-svg-png-icon-free-download.png" />
        </li>
        <li>
          <img src="https://www.pinclipart.com/picdir/middle/250-2508896_social-twitter-outline-svg-png-icon-free-download.png" />
        </li>
      </ul>
    </section>
  );
};

export default BusinessCard;
