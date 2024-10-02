import React from 'react';
import "./MyWork.css";
import Pattern from "./../../img/theme_pattern.svg";
import Data from '../Data/Data';
import Arrow from "./../../img/arrow_icon.svg"

const MyWork = () => {
  return (
    <>
      <div className="mywork" id='work'>
        <div className="myworkTitle">
            <h1>My Latest Work</h1>
            <img src={Pattern} alt="" />
        </div>

        <div className="myWorkContainer">
            {Data.map((work,index)=>{
                return(
                    <>
                        <img key={index} src={work.w_img} alt="" />
                    </>
                );
            })}
        </div>

        <div className="myWorkShowMore">
            <p>Show More</p>
            <img src={Arrow} alt="" />
        </div>
      </div>
    </>
  );
};

export default MyWork;
