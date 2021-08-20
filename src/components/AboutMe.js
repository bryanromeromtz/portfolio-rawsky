import React from 'react';

import author from '../static/assets/me.png'
const AboutMe = () => {
  return (
    <div className="container py-5 space-about-me">
      <div className="header__wrapper">
        <h1 className="header__header">
          About
        </h1>
      </div>

      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrapper">
            <img className="profile-img" src={author} alt="Author..."></img>
          </div>
        </div>
        <div className="text-wrapper col-lg-6 col-xm-12">
          <div className="about-text">
            <div className="label-bold">Who's this guy?</div>
            <div className="description-me">I am a full-stack developer living in Guadalajara Jal, MX.
              I have a great passion for UI effects, animations, and authoring. intuitive and dynamic user experiences. and I'm also passionate about mastering the full stack of apps
              Let's do something special.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
