import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";
import AddClock from "../images/add_clock.jpg";

export const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://afternoon-wave-02236.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className="py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="pt-3 text-center mt-5">Add any Clock</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="addService">
              <input
                {...register("name", { required: true, maxLength: 20 })}
                placeholder="name"
              />
              <input type="number" {...register("price")} placeholder="price" />
              <input {...register("img")} placeholder="img url" />
              <textarea
                {...register("description")}
                placeholder="description"
              />
              <input className="btn btn-success" type="submit" />
            </form>
          </div>
          <div className="col-lg-6 AddClock mt-3">
            <img src={AddClock} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
