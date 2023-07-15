import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">"आविष्कारकर्मीहरूका लागि हाम्रो क्याफे: जहाँ विचार जन्माउन्छ र सम्प्रेषणहरू फैलाउन्छ।"(Fuel Your Engineering Genius at our Café, Where Ideas Brew and Innovations Flourish!)</h1>
      <p className="app__opensans-p" style={{ margin: '1rem 0' }}>"आविष्कारकर्मीहरूका लागि हाम्रो क्याफे":"Our Café for Inventors." It emphasizes that the café is dedicated to catering to the needs and interests of engineers and inventors. </p>
      <p className="app__opensans-p" style={{ margin: '1rem 0' }}>"जहाँ विचार जन्माउन्छ" :"Where Ideas are Born." It highlights the café as a space where innovative and creative thoughts are nurtured, encouraging engineers to explore new concepts and solutions. </p>
      <p className="app__opensans-p" style={{ margin: '1rem 0' }}>"र सम्प्रेषणहरू फैलाउन्छ" :"and Expressions are Spread." It emphasizes that the café not only encourages idea generation but also provides a platform for engineers to share and communicate their thoughts, fostering collaboration and knowledge exchange. </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;