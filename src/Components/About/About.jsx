import React from 'react';
import "./About.css";
import Theme from './../../img/theme_pattern.svg';
import Profile from "./../../img/davic.jpg"

const About = () => {
  return (
    <>
     <div className="about" id='about'>
        <div className="aboutTitle">
            <h1>About Me</h1>
            <img src={Theme}/>
        </div>

        <div className="aboutSection">
            <div className="aboutLeft">
                <img src={Profile} />
            </div>
            <div className="aboutRight">
                <div className="aboutPara">
                    <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career. I had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                    <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to eact project.</p>
                </div>
                <div className="aboutSkills">
                    <div className="aboutskill">
                        <p>HTML & CSS</p>
                        <hr style={{width:'50%'}} />
                    </div>

                    <div className="aboutskill">
                        <p>React JS</p>
                        <hr style={{width:'70%'}} />
                    </div>

                    <div className="aboutskill">
                        <p>Javascript</p>
                        <hr style={{width:'60%'}} />
                    </div>

                    <div className="aboutskill">
                        <p>Next JS</p>
                        <hr style={{width:'50%'}} />
                    </div>
                </div>
            </div>
            {/* aboutRight */}
        </div>
        <div className="aboutAchievement">
            <div className="about_Achievements">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about_Achievements">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about_Achievements">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
     </div> 
    </>
  )
}

export default About
