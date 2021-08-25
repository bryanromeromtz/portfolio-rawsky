import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h2>Hello, I'm<span className="color-bryan"> Bryan</span><span className="color-exclamation">!!</span></h2>
        <h2>web developer</h2>

        <ReactTypingEffect
          className="typed-text"
          text={["Web Design", "Web Development", "Responsive Web Design", "UI/UX"]}
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
