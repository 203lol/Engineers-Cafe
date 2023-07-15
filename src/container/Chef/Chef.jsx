import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.you} alt="you_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Founder & Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans"style={{ margin: '1rem 0' }}>At Engineers Café, we believe in fostering innovation, collaboration, and lifelong learning to drive positive change through engineering.</p>
        </div>
        <p className="p__opensans" style={{ margin: '1rem 0' }} text-align= 'center'> We provide a platform for engineers to connect, share insights, and form valuable partnerships. Our supportive community uplifts and empowers individuals, promoting personal and professional development. With a commitment to quality and excellence, we strive to deliver an exceptional experience. Together, we aim to make a difference through engineering, driving positive change and pushing the boundaries of what is possible. </p>
      </div>

      <div className="app__chef-signature">
        <p>Lokesh Pandit</p>
        <p className="p__opensans">Founder & Chef</p>
        <img src={images.signature} alt="signature_image" />
      </div>
    </div>
  </div>
);

export default Chef;