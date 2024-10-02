import React from "react";
import "./Contact.css";
import Pattern from "./../../img/theme_pattern.svg";
import MailIcon from "./../../img/mail_icon.svg";
import LocationIcon from "./../../img/location_icon.svg";
import CallIcon from "./../../img/call_icon.svg";
// bc3fe19f-336e-494d-a738-06eed926db22
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bc3fe19f-336e-494d-a738-06eed926db22");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <>
      <div className="contact" id="contact">
        <div className="contactTitle">
          <h1>Get In Touch</h1>
          <img src={Pattern} />
        </div>
        <div className="contactSection">
          <div className="contactLeft">
            <h1>Let's Talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime</p>
            <div className="contactDetails">
              <div className="contactDetail">
                <img src={MailIcon} alt="" />
                <p>Something@gmail.com</p>
              </div>

              <div className="contactDetail">
                <img src={CallIcon} alt="" />
                <p>09998 --990 --09888</p>
              </div>

              <div className="contactDetail">
                <img src={LocationIcon} alt="" />
                <p>Ballkumari Lalitpur, Nepal</p>
              </div>
            </div>
          </div>
          <div className="contactRights">
            <form className="contactRight" onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter Your Name" name="name" />
                <label htmlFor="">Your Email</label>
                <input type="Email" placeholder="Enter Your Email" name="email" />
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" placeholder="Enter Your Message" rows="8"></textarea>
                <button className="contactSubmit" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
