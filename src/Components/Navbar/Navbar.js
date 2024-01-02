import React from "react";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">sharmii_mahesh</div>
        <Toggle />
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
              <li>Home</li>
            </Link>

            <Link spy={true} to="Service" smooth={true} activeClass="activeClass">
              <li>Service</li>
            </Link>

            <Link spy={true} to="Works" smooth={true} activeClass="activeClass">
              <li>Languages</li>
            </Link>

            <Link spy={true} to="Portfolio" smooth={true} activeClass="activeClass">
              <li>Portfolio</li>
            </Link>

            {/* 
              <Link spy={true} to='Testimonials' smooth={true} activeClass='activeClass'>
                <li>Testimonials</li>
              </Link>
            */}
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
}
