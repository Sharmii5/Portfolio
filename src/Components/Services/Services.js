import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glass from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import CV from "./721446026 Sharmika mageswaran.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function Services() {
  const transition = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Service">
      {/*left side*/}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          I Like To Work in
        </span>
        <span>These Areas </span>

        <span className="awesome-s">
        I excel in designing, developing, and maintaining software systems, <br/>
        utilizing my programming skills to address complex challenges and <br/>enhance software performance and functionality. 
        My expertise lies <br/>in turning intricate problems into efficient, user-friendly solutions,<br/> ensuring high-quality outcomes.
        </span>

        <a href={CV} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/*right side*/}

      <div className="cards">
        <motion.div
          whileInView={{ left: "23rem" }}
          initial={{ left: "35rem" }}
          transition={transition}
          style={{ left: "24rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"UI/UX"}
            detail={" Figma,  Sketch, Adobe XD "}
          />
        </motion.div>

        {/* Second Card */}

        <motion.div
          whileInView={{ left: "3rem", top: "12rem" }}
          initial={{ left: "-10rem" }}
          transition={transition}
          style={{ top: "12rem", left: "4rem" }}
        >
          <Card
            emoji={Glass}
            heading={"Web Developer"}
            detail={" Html, Css, JavaScript,PHP, SQL, React "}
          />
        </motion.div>

        {/* 3rd Card */}

        <motion.div
          whileInView={{ left: "22rem", top: "19rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
          style={{ top: "19rem", left: "20rem" }}
        >
          <Card emoji={Humble} heading={"Android Developer"} detail={"Java, Kotlin, Firebase"} />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}
