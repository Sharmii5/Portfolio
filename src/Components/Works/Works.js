import React from "react";
import "./Works.css";
import Html from "../../img/html.png";
import React1 from "../../img/react.png";
import Js from "../../img/js.png";
import Css from "../../img/css.png";
import Java from "../../img/java.png";
import Php from "../../img/php.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="Works">
      {/*left side*/}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works For All These
        </span>
        <span>Languages</span>

        <span className="awesome-s">
        I'm proficient in Java, React, PHP, MySQL, HTML, <br />CSS and JS. 
          
        These skills enable me to create dynamic<br /> web and mobile applications, robust server-side solutions, and stylish <br />user interfaces. 
          
        Explore my portfolio to see projects that <br />showcase my expertise. Let's discuss collaboration opportunities!
        </span>

        {<button className="button s-button">Hire me</button>}

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/*right side*/}

      <div className="w-rigth">
        <motion.div
          initial={{ rotate: 85 }}
          whileInView={{ rotate: 0 }}
          transition={{ duration: 3.5, type: "spring" }}
          viewport={{ margin: "-40px" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Html} alt="HTML" />
          </div>

          <div className="w-secCircle">
            <img src={React1} alt="React" />
          </div>

          <div className="w-secCircle">
            <img src={Php} alt="PHP" />
          </div>

          <div className="w-secCircle">
            <img src={Js} alt="JS" />
          </div>

          <div className="w-secCircle">
            <img src={Css} alt="CSS" />
          </div>

          <div className="w-secCircle">
            <img src={Java} alt="java"  style={{ width: '110px', height: '110px' }} />
          </div>
        </motion.div>
        <div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </div>
  );
}
