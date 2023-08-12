import React from "react";
import '../CSS/Contact.css'
import conimg from '../Images/contact.webp'

const Contact = () => {
  return (
    <>
    
      <div className="contact-conatainer ">
        <div className="row">
          <div className="col-10 col-lg-10 mx-auto">
            <div className="row">
              <div className="contact-leftside col-12 col-lg-5">
                <figure>
                  <img src={conimg} alt="" className="contactimg" />
                </figure>
                {/* <h1 className="salesteam ">
                  Contact With Our <br /> Sales Team
                </h1> */}
                
                 
                
              </div>
              <div className="contact-rightside col-12 col-lg-7">
                <form >
                  <div className="row">
                    <div className="col-12 col-lg-6 contact-input-field">
                      <input
                        type="text"
                        name="firstname"
                        id=""
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-12 col-lg-6 contact-input-field">
                      <input
                        type="text"
                        name="lastname"
                        id=""
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-lg-6 contact-input-field">
                      <input
                        type="text"
                        name="phonenumber"
                        id=""
                        className="form-control"
                        placeholder="Phone Number "
                      />
                    </div>
                    <div className="col-12 col-lg-6 contact-input-field">
                      <input
                        type="text"
                        name="email"
                        id=""
                        className="form-control"
                        placeholder="Email ID"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 contact-input-field">
                      <input
                        type="text"
                        name="address"
                        id=""
                        className="form-control"
                        placeholder="Add Address"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 ">
                      <textarea
                        name="message"
                        className="msarea"
                        id=""
                        cols="87"
                        rows="10"
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                  </div>
                  <br />
                  <div class="form-check form-checkbox-style">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />

                    <label class="form-check-label" className="main-hero-para mx-2 ">
                      I agree that the GoNoise may contact me at the email
                      address or phone number above fill.
                    </label>
                  </div>
                  <br />

                  <button type="submit" className="btn  btn-dark ">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className=" Map col-md-12"   data-aos="zoom-in" >
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27468.39097855999!2d76.36501434051024!3d30.618485377317693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39101e9f571e29ed%3A0xf4625872624ed2c6!2sSirhind%2C%20Punjab%20140406!5e0!3m2!1sen!2sin!4v1661858976384!5m2!1sen!2sin"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
