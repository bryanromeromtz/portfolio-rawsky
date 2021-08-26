import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h2 className="header-title">Hello, I'm<span className="color-bryan"> Bryan Monokai</span><span className="color-exclamation">.</span></h2>
        <h2 className="header-title">Im a full-stack web developer</h2>

        <ReactTypingEffect
          className="typed-text"
          text={["Web Design", "Web Development", "Responsive Web Design", "UI/UX"]}
          speed={200}
          eraseSpeed={200}
          eraseDelay={1000}
          typingDelay={1200}
          cursorClassName="cursor-typed"
        />
        <Link smooth={true} to="contact" className="btn-main-offer">Contact Me</Link>
      </div>
    </div>
  )
}

export default Header;
