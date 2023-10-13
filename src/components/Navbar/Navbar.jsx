import React, { useContext } from "react";
import Toggle from "../Toggle/Toggle";
import Logo from '../../image/logo.png'
import "./Navbar.css";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import { useState } from "react";
import { VscChromeClose } from 'react-icons/vsc';
import { SlMenu } from 'react-icons/sl';

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  const [mobileMenu, setmobileMenu] = useState();
  const [show, setshow] = useState("hide");


  window.addEventListener('scroll', (event) => {
    let navbar = document.getElementsByClassName("navbar");

    if (window.pageYOffset !== undefined) {
      if (window.pageYOffset > 25) {
        navbar[0].style.background = "aliceblue";
      }
      else {
        navbar[0].style.background = "transparent";
      }
    }
  })

  const openMobileMenu = () => {
    setmobileMenu(true);
    setshow("show");
  }

  const closemobileMenue = () => {
    setmobileMenu(false);
    setshow("hide");
  }
  const navigatepage = () => { // to move top when click on link and hide the mobile menue
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setmobileMenu(false);
    setshow("hide");
  }



  return (
    <div className='navbar' style={{ backgroundColor: darkMode ? "black" : "white" }}>
      {/* left */}
      <div className="n-left">
        <img src={Logo} alt="" style={{ "height": "65px", "width": "65px" }} />
        <div className="n-name" style={{ color: darkMode ? "white" : "rgb(0,0,153)", fontFamily: "Arial,sans-serif" }}>EXAMIRROR</div>
      </div>

      <div className={`linkouter ${show}`} onClick={closemobileMenue}>  </div>

      {/* right */}
      <div className={`navlinks ${show}`} style={{ backgroundColor: darkMode ? "black" : "white" }}>

        <Link className="link" onClick={navigatepage}  activeClass="active" to="Intro" spy={true} smooth={true}>
          Home
        </Link>

        <Link className="link" onClick={navigatepage}  to="services" spy={true} smooth={true}>
          Features
        </Link>

        <Link className="link" onClick={navigatepage}  to="works" spy={true} smooth={true}>
          Experience
        </Link>

        <Link className="link" onClick={navigatepage}  to="portfolio" spy={true} smooth={true}>
          Portfolio
        </Link>

        <Link className="link" onClick={navigatepage}  to="testimonial" spy={true} smooth={true}>
          Testimonial
        </Link>

        <Link className="link" onClick={navigatepage}  to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>

        <div className="link" >
          <Toggle />
        </div>
      </div>

      {/* mobile menu */}
      {mobileMenu ? (
        <VscChromeClose id='menu__toggle' onClick={closemobileMenue} />
      ) : (
        <SlMenu id='menu__toggle' onClick={openMobileMenu} />
      )}
    </div>
  );
};

export default Navbar;
