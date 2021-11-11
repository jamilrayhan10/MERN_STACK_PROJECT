import React, { useState } from "react";
import "./MakeAdmin.css";
import useAuth from "../../../Hooks/useAuth";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    // console.log(user);
    fetch("https://afternoon-wave-02236.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        // authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          setSuccess(true);
          setEmail("");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <div className="container">
        <div className="make_admin mt-5">
          <h2>Add as a Admin</h2>
          <form onSubmit={handleAdminSubmit}>
            <input
              type="email"
              placeholder="email"
              name="email"
              required
              onBlur={handleOnBlur}
            />
            <button className="admin_btn" type="submit">
              Make Admin
            </button>
          </form>
          {success && (
            <div className="alert alert-success mt-4" role="alert">
              Add Success
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
