import React,{ useContext } from "react";
import Toggle from "../Toggle/Toggle";
import Logo from '../../image/logo.png'
import "./Navbar.css";
import { Link } from "react-scroll";
import {themeContext} from "../../Context";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  
  return (
    <div className="n-wrapper" id="Navbar" style={{backgroundColor:darkMode?"black":"white"}}>
      {/* left */}
      <div className="n-left">
        <img src={Logo} alt="" style={{"height":"65px","width":"65px", marginTop:"0.6rem",marginLeft:"0.6rem"}} />
        <div className="n-name" style={{color: darkMode ? "white" : "rgb(0,0,153)",fontFamily: "Arial,sans-serif"}}>EXAMIRROR</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Intro" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Features
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                <button className="button n-button">Contact</button>
              </Link>
            </li>

            <li>
              <Toggle />
            </li>
          </ul>
        </div>
        

        
      </div>
    </div>
  );
};

export default Navbar;
