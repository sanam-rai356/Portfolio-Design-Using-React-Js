import React from 'react';
import "./Footer.css";
import FooterLogo from "./../../img/footer_logo.svg";
import UserIcon from "./../../img/user_icon.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerTop">
            <div className="footerTopLeft">
                <img src={FooterLogo}/>
                <p>I am a fronted developer from California USA with 10 years of experience in multiple companies in Microsoft, Google and Facebook</p>
            </div>
            <div className="footerTopRight">
                <div className="footerEmailInput">
                  <img src={UserIcon} />
                  <input type="email" placeholder='Enter Your Email' />
                </div>
                <div className="footerSubscribe">
                  Subscribe
                </div>
            </div>
        </div>
        <hr />

        <div className="footerBottom">
          <p className="footerBottomLeft">@ 2023. All right reserved</p>
          <div className="footerbottomRight">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
