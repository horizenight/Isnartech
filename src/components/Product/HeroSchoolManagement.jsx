import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./CountryHero.css";

function HeroSchoolManagement({ name, Background, cta = true ,Video=false }) {
  return (
      <>
    <div
      className="country__hero__agriculture"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="category">By Isnartech</div>

      <div className="country-title">{name}</div>
      {/* <Link to="/contact" target="_blank">
                    <button className="journey__button">
                        Start Your Journey
                    </button>
            </Link> */}

     

      {cta && (
        <div className="scrolling__nav--small">
          <a to="about__country" smooth={true} duration={1000}>
            <span className="scrolling__link">
              &nbsp;&nbsp;&nbsp;&nbsp;About Product
            </span>
          </a>
          <a to="country__perks" smooth={true} duration={1000}>
            <span className="scrolling__link">
              &nbsp;&nbsp;&nbsp;&nbsp; Benefits
            </span>
          </a>

          <a
            to="immigration-call"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <span className="scrolling__link">
              &nbsp;&nbsp;&nbsp;&nbsp;Contact us
            </span>
          </a>
        </div>
      )}
    </div>
{   Video &&  <div className="videoContainer">
        <video width="320" height="240" controls>
          <source src={Video} type="video/mp4" />
        
          Your browser does not support the video tag.
        </video>
      </div>}
    </>
  );
}

export default HeroSchoolManagement;
