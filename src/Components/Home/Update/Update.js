import React from "react";
import updateImg1 from "../../images/UpdateImg/updateNews.jpeg";
import updateImg2 from "../../images/UpdateImg/updateNews2.jpeg";
import updateImg3 from "../../images/UpdateImg/updateNews3.jpeg";
import "./Update.css";

const Update = () => {
  return (
    <div className="container py-5">
      <div className="sec_title py-5">
        <h2>Stay Update Clocks</h2>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="card border p-3">
            <img src={updateImg1} alt="" />
            <div className="updatebtn text-center">
              <button className="btn btn-light">Logo & Assete</button>
              <button className="btn  btn-light">Travel Director</button>
            </div>

            <div className="card-body p-0 m-0">
              <h4 className="card-title ">
                Including animation in your design system
              </h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <button className="btn btn-light py-3 mt-3">See Details</button>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border p-3">
            <img src={updateImg2} alt="" />
            <div className="updatebtn text-center">
              <button className="btn btn-light">Logo & Assete</button>
              <button className="btn  btn-light">Travel Director</button>
            </div>

            <div className="card-body p-0 m-0">
              <h4 className="card-title ">
                Including animation in your design system
              </h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <button className="btn btn-light py-3 mt-3">See Details</button>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border p-3">
            <img src={updateImg3} alt="" />
            <div className="updatebtn text-center">
              <button className="btn btn-light">Logo & Assete</button>
              <button className="btn  btn-light">Travel Director</button>
            </div>

            <div className="card-body p-0 m-0">
              <h4 className="card-title ">
                Including animation in your design system
              </h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <button className="btn btn-light py-3 mt-3">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
