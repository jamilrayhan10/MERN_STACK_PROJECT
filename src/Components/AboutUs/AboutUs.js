import React from "react";
import "./AboutUs.css";
import aboutImg from "../images/about_text_img.jpeg";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Header></Header>
      <section className="about_us bg-light pb-5" data-aos="fade-up">
        <div className="about_banner d-flex align-items-center text-white">
          <div className="container">
            <h2>About Us</h2>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5 pt-5 align-items-center about_wrapper">
            <div className="col-lg-6">
              <div className="about_img">
                <img src={aboutImg} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <strong>Visit Our Clock Office</strong>
                <h2>Clock </h2>
                <p>
                  LUMICHRON offers modern and traditional post clocks as well as
                  a custom-designed post clocks, built exactly to your
                  specifications. Our post clocks are perfect for a city center,
                  golf course, courtyard, streetscape, or backyard. Like all of
                  LUMICHRON’s clocks, they are built to our high professional
                  standards, and have durable and accurate fully-automatic time
                  controls with internal back-lit illumination. Post and Street
                  Clocks can be double-sided or have 4 faces, and are available
                  in a range of heights and head sizes. Custom-designed post
                  clocks are another option, built exactly to your
                  specifications. Call for more information 888-788-4838.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
