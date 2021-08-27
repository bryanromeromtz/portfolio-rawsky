import React from 'react';
import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Logo from '../static/assets/logo-b.png';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container navbar-wrapper">

        <a className="navbar-brand" href="#top"><img className="logo" src={Logo} alt="logo..."></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" className="nav-link" href="#">about</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" className="nav-link" href="#">Experience</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" className="nav-link" href="#">portfolio</Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to="contact" className="nav-link" href="#">contact</Link>
            </li>

          </ul>

        </div>


      </div>
    </nav>
  )
}

export default Navbar;