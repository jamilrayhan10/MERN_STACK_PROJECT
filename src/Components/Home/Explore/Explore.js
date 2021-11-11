import React from "react";
import { Card } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useServices from "../../../Hooks/useServices";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const Explore = () => {
  const [serviceItem] = useServices();

  return (
    <>
      <Header></Header>
      <div className="explore_section bg-light">
        <div className="container pt-5  mt-5">
          {serviceItem.length === 0 ? (
            <div className="d-flex justify-content-center my-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden"></span>
              </div>
            </div>
          ) : (
            <section id="services" className="services_sec bg-light my-2">
              <div className="container">
                <div className="sec_title">
                  <h2 className="fw-bold">
                    <h2>Explore Page</h2>
                  </h2>
                </div>
                <div className="row ">
                  {serviceItem.map((item) => {
                    return (
                      <div
                        key={item._id}
                        className="col-lg-4 col-md-6 col-sm-12 mb-5"
                        data-aos="fade-up"
                      >
                        <Card className="services_card_item my-4">
                          <div className="services_img ">
                            <Card.Img variant="top" src={item.img} />
                          </div>
                          <Card.Body className="service_text">
                            <h3>{item.name}</h3>
                            <h5>Price: {item.price}$</h5>
                            <p> {item?.description?.slice(0, 100)}....</p>
                            <HashLink to={`servicesDetails/${item.name}`}>
                              <button className="regular_btn">
                                Booking Now
                              </button>
                            </HashLink>
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Explore;
