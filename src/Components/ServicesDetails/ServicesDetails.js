import React, { useEffect, useState } from "react";
// , { useEffect, useState }
// import { useHistory, useParams } from "react-router";
import { HashLink } from "react-router-hash-link";
import "./ServicesDetails.css";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useParams } from "react-router";
import useServices from "../../Hooks/useServices";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const ServicesDetails = () => {
  const { user } = useAuth();
  // console.log(user);
  const userEmail = user?.email;
  const username = user?.displayName;
  const { name } = useParams();
  const [serviceItem] = useServices();
  const [selectedItem, setSelectedItem] = useState({});
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch(`https://afternoon-wave-02236.herokuapp.com/orders/${name}`).then(
      (res) => res.json().then((data) => setSelectedItem(data))
    );
  }, [name]);
  useEffect(() => {
    const matched = serviceItem.find((item) => item.name === name);
    setSelectedItem(matched);
  }, [serviceItem, name]);

  const onSubmit = (data) => {
    data.servicesItem = selectedItem;
    fetch(`https://afternoon-wave-02236.herokuapp.com/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order processed Successfully");
          reset();
        }
      });
  };

  return (
    <>
      <Header></Header>
      <section id="services_details" className="order">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mt-5 pt-4">
              <div className="row align-items-center">
                <div className="service_text border p-3">
                  <div className="service_img text-center">
                    <img
                      className="my-2"
                      style={{ width: "200px" }}
                      src={selectedItem?.img}
                      alt=""
                    />
                    <h2>{selectedItem?.name}</h2>
                    <p>{selectedItem?.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="py-3">Register Now</h2>
              <div className="booking">
                <form
                  className="orderform border p-4"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    defaultValue={username}
                    {...register("firstName")}
                    placeholder="username"
                  />
                  <input
                    defaultValue={userEmail}
                    {...register("email")}
                    placeholder="email"
                  />
                  <input
                    {...register("address")}
                    placeholder="Address"
                    required
                  />
                  <input {...register("number")} placeholder="phone" required />

                  <input className="submitbtn" type="submit" />
                </form>
              </div>
            </div>
          </div>

          <div className="text-center py-4 ">
            <HashLink to="/home#services">
              <button className="regular_btn">See All Services</button>
            </HashLink>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ServicesDetails;
