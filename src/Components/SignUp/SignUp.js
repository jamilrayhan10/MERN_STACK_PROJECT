import React from "react";
import "./SignUp.css";
import googleIcon from "../../img/google.png";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useHistory } from "react-router";

const SignUp = () => {
  // use auth
  const {
    signInUsingGoogle,
    setName,
    setEmail,
    setPassword,
    registerUserEmailAndPassword,
    setSuccess,
    success,
    setError,
    error,
    updateUser,
    verifyEmail,
    setUser,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  // redirect uri
  const redirect_uri = location.state?.from || "/home";
  // handle Name
  const handleName = (e) => {
    setName(e.target.value);
  };
  // handle Email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  // handle Password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // handle User Register
  const handleUserRegister = (e) => {
    e.preventDefault();

    registerUserEmailAndPassword()
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        updateUser();
        verifyEmail();
        history.push(redirect_uri);
      })
      .catch((err) => {
        setError(err.message);
        // remove input field for a few second
        setTimeout(() => {
          document.getElementById("userName").value = "";
          document.getElementById("userEmail").value = "";
          document.getElementById("userPassword").value = "";
        }, 1500);
      });
  };

  // remove success or error for a few second
  setTimeout(() => {
    setSuccess("");
    setError("");
  }, 3000);

  return (
    <>
      <div className="register_container" data-aos="fade-up">
        <div className="container">
          <div className="form_container">
            <form onSubmit={handleUserRegister}>
              <h2>Register</h2>
              <div className="google_sign_in" onClick={signInUsingGoogle}>
                <div className="google_icon_img">
                  <img src={googleIcon} alt="" />
                  <span>Continue With Google</span>
                </div>
              </div>
              <div className="mb-4">
                <input
                  id="userName"
                  onBlur={handleName}
                  className="input"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4">
                <input
                  id="userEmail"
                  onBlur={handleEmail}
                  className="input"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <input
                  id="userPassword"
                  onBlur={handlePassword}
                  className="input"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div>
                <p className="text-success">{success}</p>
                <p className="text-danger">{error}</p>
              </div>
              <div className="row mb-4">
                <div className="col-lg-6">
                  <div className="form-check">
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-lg-6 text-end">
                  <Link to="">
                    <p className="forgot_password">Forgot Password ?</p>
                  </Link>
                </div>
              </div>
              <div className="submit_btn mb-3">
                <input className="regular_btn" type="submit" value="Register" />
              </div>
              <p className="text-center link_text">
                Already have an account ?
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
