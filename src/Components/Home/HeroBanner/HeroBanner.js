import React from "react";
import "./HeroBanner.css";
import HerobannerImg from "../../images/banner_clock.jpg";

const Slider = () => {
  return (
    <>
      <div className="hero_banner  ">
        <div className="container py-5  ">
          <div className="row">
            <div className="col-lg-6 py-5">
              <h2 className="py-4">Why is the clock important?</h2>
              <p>
                The clock is one of the most important devices in civilization.
                Everything we know is dependent on time, whether it be your
                everyday routine, TV programming or travel. In built up areas we
                can't walk for five minutes before seeing a clock.
              </p>
            </div>
            <div className="col-lg-6">
              {/* <img
                className="img-fluid w-100 h-100"
                src={HerobannerImg}
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
