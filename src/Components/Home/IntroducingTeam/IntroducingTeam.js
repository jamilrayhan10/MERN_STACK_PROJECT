import React from "react";
import about from "../../images/about.jpeg";
import "./IntroducingTeam.css";

const IntroducingTeam = () => {
  return (
    <>
      <section className="team_introducing_sec">
        <div className="container">
          <div className="row align-items-center introducingTeam_wrapper">
            <div className="col-lg-5">
              <div className="about_img" data-aos="fade-up">
                <img src={about} alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="introducing_team_info" data-aos="fade-up">
                <h2>What is Clock?</h2>
                <p>
                  A clock is a device used to measure, verify, keep, and
                  indicate time. The clock is one of the oldest human
                  inventions, meeting the need to measure intervals of time
                  shorter than the natural units: the day, the lunar month, and
                  the year. Devices operating on several physical processes have
                  been used over the millennia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroducingTeam;
