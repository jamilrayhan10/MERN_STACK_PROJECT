import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddAProduct.css";
const AddAProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
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
    <div className="py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 add_service">
            <h2 className="text-center">Add any Clock</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="addService">
              <input
                {...register("name", { required: true, maxLength: 20 })}
                placeholder="clock name"
              />
              <input type="number" {...register("price")} placeholder="price" />
              <input {...register("img")} placeholder="img url" />
              <textarea
                {...register("description")}
                placeholder="description"
              />
              <input className="add_product" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAProduct;
