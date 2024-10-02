import React, { useRef, useState } from 'react';
import "./Navbar.css";
import Logo from "./../../img/logo.svg";
import Underline from "./../../img/nav_underline.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ToggleIcon from "./../../img/menu_open.svg";
import MenuClose from "././../../img/menu_close.svg"

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0px"
  }

  const CloseMenu=()=>{
    menuRef.current.style.right="-350px"
  }
  return (
    <>
      <div className="navbar">
        <img src={Logo} alt="Logo" />
        <img src={ToggleIcon} onClick={openMenu} className='navMobOpen' />

        <ul className="navMenu" ref={menuRef}>
          <img src={MenuClose} onClick={CloseMenu} className='navMobClose' />

            <li><AnchorLink className="anchor_link"  href="#home"><p onClick={()=>{setMenu("home")}}>Home</p></AnchorLink>{menu==="home"?<img src={Underline}/>:<></>}</li>

            <li><AnchorLink className="anchor_link" offset={50} href="#about"><p onClick={()=>{setMenu("about")}}>About Me</p></AnchorLink>{menu==="about"?<img src={Underline}/>:<></>}</li>

            <li><AnchorLink className="anchor_link" offset={50} href="#services"><p onClick={()=>{setMenu("services")}}>Services</p></AnchorLink>{menu==="services"?<img src={Underline}/>:<></>}</li>

            <li><AnchorLink className="anchor_link" offset={50} href="#work"><p onClick={()=>{setMenu("work")}}>Portfolio</p></AnchorLink>{menu==="work"?<img src={Underline}/>:<></>}</li>

            <li><AnchorLink className="anchor_link" offset={50} href="#contact"><p onClick={()=>{setMenu("contact")}}>Contact</p></AnchorLink>{menu==="contact"?<img src={Underline}/>:<></>}</li>
        </ul>
        <div className="navConnect">
        <AnchorLink className="anchor_link" offset={50} href="#contact">Connect With Me</AnchorLink>
            
        </div>
      </div>
    </>
  )
}

export default Navbar;
