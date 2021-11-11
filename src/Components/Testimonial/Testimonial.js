import React from "react";
import "./Testimonial.css";
import useReview from "../../Hooks/useReview";
import { Card } from "react-bootstrap";
import Rating from "react-rating";

const Testimonial = () => {
  const [reviewItem] = useReview();
  return (
    <>
      <div className="bg-light py-5">
        <div className="container ">
          <h4 className="text-center">REVIEW & TESTIMONIALS</h4>
          <h2 className="text-center fs-1 fw-bold">Top Reviews Clocks</h2>
          <div className="row">
            {reviewItem.map((review) => {
              return (
                <div
                  key={review._id}
                  className="col-lg-4 col-md-6 col-sm-12 mb-5"
                  data-aos="fade-up"
                >
                  <Card className="services_card_item my-4 p-3 text-center">
                    <h3>{review?.name}</h3>
                    <Rating
                      className="text-warning "
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star"
                      initialRating={review.rating}
                    ></Rating>
                    <p>{review.description}</p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
