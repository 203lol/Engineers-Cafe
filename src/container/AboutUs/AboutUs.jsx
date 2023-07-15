import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Welcome to Engineers Café, a one-of-a-kind establishment dedicated to providing a stimulating environment for engineers to unwind, connect, and fuel their innovative minds. We believe in fostering a community where engineering professionals can gather, share ideas, and find inspiration.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Engineers Café is the brainchild of a passionate group of engineers who envisioned a space where their fellow professionals could find solace, inspiration, and a sense of community.  Going to be Established soon in comming future, our café wiil be serving engineers and engineering enthusiasts with dedication and enthusiasm since its inception.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;