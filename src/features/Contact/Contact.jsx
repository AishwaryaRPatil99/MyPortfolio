import React, {useRef} from "react";
import "./Contact.css";
import content from "../../content/content";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { ContactContent } = content;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_laats8v', 'template_mh1t42q', form.current, 'nHW9FRa1Hl-eE7KQR')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent Successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        });
  };

  return (
    <div className="contact-me-div" id="contact">
      <div className="about-content-div contact-content-div">
        <div className="abt-header-div">
          <div className="abt-title-div">
            <h2 className="abt-title">Contact</h2>
            <hr className="abt-title-hr"></hr>
          </div>
          <div className="abt-subtitle-div">
            <p className="abt-subtitle">{ContactContent.contactDescription}</p>
          </div>{" "}
        </div>
        <div className="contact-form-div">
          <form
             name="uner-contact-form"
            // method="POST"
            // action="/uner-contact-form" 
            ref={form} onSubmit={sendEmail}
          >
            <input type="hidden" name="form-name" value="uner-contact-form" />

            <div className="con-input-div">
              <label className="cform-label">
                Name
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Enter Your Name"
                  className="cform-input"
                />
              </label>
            </div>
            <div className="con-input-div">
              <label className="cform-label">
                Email
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="Enter Your Email"
                  className="cform-input"
                />
              </label>
            </div>
            <div className="con-input-div">
              {" "}
              <label className="cform-label">
                Message
                <textarea
                  name="message"
                  required
                  placeholder="Enter Your Message"
                  maxLength="250"
                  className="con-text-area cform-input"
                ></textarea>
              </label>
            </div>

            <button type="submit" name="Submit" className="con-submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
