import React from "react";
import BannerPage from "../common/BannerPage";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <BannerPage
        currentPage={"Contact Us"}
        primaryPage={"home"}
        img={"/images/banners/banner-contact.jpg"}
      />
      <section className="contact-us">
        <div className="container">

          <div className="form-container">
            <div className="form-content">
              <h4>message us</h4>
              <p>
                we are here to help and answer any question you might have.
                <br />
                we look forward to hearing from you.
              </p>
              {/* <Link to={"tel:+2001021915009"}>01021915009</Link> */}
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor=""></label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor=""></label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="enter your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor=""></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="enter your email address"
                />
              </div>
              <div className="form-group">
                <label htmlFor=""></label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  placeholder="your message.."
                />
              </div>
              <input type="submit" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
