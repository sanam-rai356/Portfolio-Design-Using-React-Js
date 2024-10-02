import React from 'react';
import "./Service.css";
import Theme from "./../../img/theme_pattern.svg";
import ServicesData from "./../../img/services_data";
import ArrowIcon from "./../../img/arrow_icon.svg"

const Service = () => {
  return (
    <>
      <div className="services" id='services'>
        <div className="servicesTitle">
            <h1>My Services</h1>
            <img src={Theme}/>
        </div>

        <div className="servicesContainer">
            {ServicesData.map((service,index)=>{
                return(
                    <div key={index} className='services_format'>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="servicesReadMore">
                            <p>Read More</p>
                            <img src={ArrowIcon} />
                        </div>
                    </div>  
                );
            })}
        </div>
      </div>
    </>
  )
}

export default Service;
