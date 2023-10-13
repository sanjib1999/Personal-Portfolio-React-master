import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact us</span>
          <div className="contact_details">
            <div className="whatsapp">
              <img src="https://th.bing.com/th/id/R.18ba0e411b1586feb65e97d7deb45b5d?rik=OCbvCEPQbXn47g&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fwhatsapp-png-whatsapp-logo-png-1000.png&ehk=7BIVvksu2ccZPkUkoiU9T8Gx7a6xEIJ61o%2fGGN12nNM%3d&risl=&pid=ImgRaw&r=0" alt="" style={{"height":"40px","width":"40px"}} />
              <div className="details">
                  <p>Whatsapp</p>
                  <span style={{marginTop:"-5rem"}}>+91 9438947656</span>
              </div>
            </div>
            <div className="call-no">
              <img src="https://www.logolynx.com/images/logolynx/8d/8d291fd3cc6737abcc69cb13cbd0625c.png" alt="" style={{"height":"40px","width":"40px"}} />
              <div className="details">
                  <p style={{marginLeft:"0.4rem"}}>call</p>
                  <span style={{marginTop:"-5rem"}}>+91 9438947656</span>
              </div>
            </div>
            <div className="Email-no">
              <img src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png" alt="" style={{"height":"40px","width":"40px"}} />
              <div className="details">
                  <p>Email</p>
                  <span style={{marginTop:"-5rem"}}>examirror1@gmail.com</span>
              </div>
            </div>
          </div>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <input type="tel" name="user_mobile" className="user" placeholder="mobile +91"/>
          <select name="user_course" className="user">
            <option value="CUET-UG">CUET-UG</option>
            <option value="CUET-PG">CUET-PG</option>
            <option value="NIMCET">NIMCET</option>
            <option value="CTET">CTET</option>
            <option value="TGT">TGT</option>
            <option value="PGT">PGT</option>
          </select>
          {/* <textarea name="message" className="user" placeholder="Message"/> */}
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
