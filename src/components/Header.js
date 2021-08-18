import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h2>Hello, my name is<span className="color-bryan"> Bryan Martinez!!</span></h2>
        <h2>i'm a full-stack web developer</h2>
        <ReactTypingEffect
          className="typed-text"
          text={["Web Design", "Web Development", "Movil Responsive", "MERN STACK"]}
          speed={200}
          eraseSpeed={200}
          eraseDelay={1000}
          typingDelay={1200}
          cursorClassName="cursor-typed"
        />
        <a href="#" className="btn-main-offer">Contact Me</a>
      </div>
    </div>
  )
}

export default Header;
