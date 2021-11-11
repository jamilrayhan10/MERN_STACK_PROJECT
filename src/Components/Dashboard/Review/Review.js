import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const Review = () => {
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://afternoon-wave-02236.herokuapp.com/review", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <div className="py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="text-center"> Your Review Form</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="addService">
                <input
                  defaultValue={user.displayName}
                  {...register("name", { required: true, maxLength: 20 })}
                  placeholder="name"
                />
                <input
                  defaultValue={user.email}
                  {...register("email", { required: true, maxLength: 20 })}
                  placeholder="email"
                />
                <input
                  {...register("text", { required: true, maxLength: 20 })}
                  placeholder="your company"
                />
                <input
                  type="number"
                  {...register("rating")}
                  placeholder="rating"
                />
                <textarea
                  {...register("description")}
                  placeholder="description"
                />
                <input
                  className="add_product"
                  type="submit"
                  value="add your review"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
