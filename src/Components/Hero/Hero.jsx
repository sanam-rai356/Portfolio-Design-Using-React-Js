import React from 'react';
import "./Hero.css";
import ProfileImage from "./../../img/davic.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <>
      <div id='home' className="hero">
        <img src={ProfileImage} alt="Profile Image" />
        <h1><span>I'm Alex Bennit,</span> frontend <br /> developer based in USA.</h1>
        <p>I am a fronted developer from California USA with 10 years of experience in multiple companies in Microsoft, Google and Facebook</p>
        <div className="heroAction">
            <div className="heroConnect"><AnchorLink className="anchor_link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
            <div className="hero_resume">My resume</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
