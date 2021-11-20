import React, { useState } from "react";

import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const logInHandleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const loginNewData = { ...loginData };
    loginNewData[field] = value;
    setLoginData(loginNewData);
  };
  // console.log(loginData);
  const submitLogin = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("please confirm your password");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);

    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            {!isLoading && (
              <form onSubmit={submitLogin}>
                <h2>Register Now</h2>
                <input
                  id="standard-basic"
                  name="name"
                  onBlur={logInHandleOnBlur}
                />
                <input
                  id="standard-basic"
                  type="email"
                  name="email"
                  onBlur={logInHandleOnBlur}
                />
                <input
                  id="standard-basic"
                  type="password"
                  name="password"
                  onBlur={logInHandleOnBlur}
                />
                <input
                  id="standard-basic"
                  type="password"
                  name="password2"
                  onBlur={logInHandleOnBlur}
                  sx={{ width: "75%" }}
                />
                <button type="submit">Register</button>
                <NavLink to="/login">
                  <button>already register ? please logign</button>
                </NavLink>
              </form>
            )}
            {/* {isLoading && <CircularProgress sx={{ marginTop: "400px" }} />}
            {user?.email && (
              <Alert severity="success"> your register success!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
