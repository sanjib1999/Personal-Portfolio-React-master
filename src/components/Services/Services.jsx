import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Our Awesome</span>
        <span>Features</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "18rem"}}
          transition={transition}
          >
          <Card
            emoji={HeartEmoji}
            heading={"Daily Live Session"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem",top:"12rem" }}
          whileInView={{ left: "3rem", top:"-0.2rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Recorded Vidoes"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "15rem", top:"18rem" }}
          transition={transition}
          >
          <Card
            emoji={Humble}
            heading={"Doubt Classes"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
          </motion.div>

          {/* 4th card */}

          <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "33rem" }}
          transition={transition}
          >
          <Card
            emoji={HeartEmoji}
            heading={"Subjectwise Pratice Test"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>

        {/* 5th card */}

        <motion.div
          initial={{ left: "-11rem",top: "19rem" }}
          whileInView={{ left: "30rem",top:"18rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Mock Test"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        
        {/* 6th card */}
        <motion.div
          initial={{ left: "-11rem",top: "19rem" }}
          whileInView={{ left: "0.5rem",top:"18rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Interact with Faculties"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
