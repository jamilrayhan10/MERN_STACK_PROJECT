import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { NavLink, useLocation, useHistory } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const loginValue = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const loginNewData = { ...loginData };
    loginNewData[field] = value;
    setLoginData(loginNewData);
  };
  const submitLogin = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const handleLoginWithGoogle = () => {
    signInWithGoogle(location, history);
  };
  return (
    <div>
      <form onSubmit={submitLogin}>
        <h2>Login</h2>
        <input required type="email" name="email" onBlur={loginValue} />
        <input required type="password" name="password" onBlur={loginValue} />

        <button type="submit">Login</button>

        <NavLink to="/register">
          <button variant="text">are you new user? please register</button>
        </NavLink>
        {/* {isLoading && (
                <CircularProgress
                  sx={{ display: "block", textAline: "center", margin: "auto" }}
                />
              )}
              {user?.email && <Alert severity="success"> login success!</Alert>}
              {authError && <Alert severity="error">{authError}</Alert>} */}
      </form>
      <p>--------------------------------------------------------</p>
      <button onClick={handleLoginWithGoogle} type="submit">
        Google Sign In
      </button>
      <p>--------------------------------------------------------</p>
    </div>
  );
};

export default Login;

// import React from "react";
// import { Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useLocation, useHistory } from "react-router";
// import "./Login.css";
// import googleIcon from "../../../img/google.png";
// import useAuth from "../../../Hooks/useAuth";

// const Login = () => {
//   const {
//     signInUsingGoogle,
//     setEmail,
//     setPassword,
//     loginUserEmailAndPassword,
//     success,
//     error,
//     setIsLoading,
//     passwordResetEmail,
//     setSuccess,
//     setError,
//   } = useAuth();
//   const location = useLocation();
//   const history = useHistory();
//   // redirect uri
//   const redirect_uri = location.state?.from || "/home";

//   // handle google sign in
//   const handleSignInGoogle = () => {
//     signInUsingGoogle()
//       .then((result) => {
//         // setUser(result.user);
//         console.log(result.user);
//         history.push(redirect_uri);
//       })
//       .catch((err) => {
//         // setError(err.message)
//         console.log(err.message);
//       })
//       .finally(() => setIsLoading(false));
//   };

//   // email value
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };
//   // password value
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   // handle login email and password
//   const handleLoginUser = (e) => {
//     e.preventDefault();
//     loginUserEmailAndPassword()
//       .then((result) => {
//         console.log(result.user);
//         setError("");
//         // redirect location
//         history.push(redirect_uri);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setSuccess("");
//         // remove input field for a few second
//         setTimeout(() => {
//           document.getElementById("email").value = "";
//           document.getElementById("password").value = "";
//         }, 1500);
//       });
//   };

//   // remove success or error for a few second
//   setTimeout(() => {
//     setSuccess("");
//     setError("");
//   }, 3000);

//   return (
//     <>
//       <div className="login_container" data-aos="fade-up">
//         <div className="container">
//           <div className="form_container">
//             <form onSubmit={handleLoginUser}>
//               <h2>Login</h2>
//               <div className="google_sign_in" onClick={handleSignInGoogle}>
//                 <div className="google_icon_img">
//                   <img src={googleIcon} alt="" />
//                   <span>Continue With Google</span>
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <input
//                   id="email"
//                   onBlur={handleEmail}
//                   className="input"
//                   type="email"
//                   placeholder="Email"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   id="password"
//                   onBlur={handlePassword}
//                   className="input"
//                   type="password"
//                   placeholder="Password"
//                   required
//                 />
//               </div>
//               <div>
//                 <p className="text-success">{success}</p>
//                 <p className="text-danger">{error}</p>
//               </div>
//               <div className="row mb-4">
//                 <div className="col-lg-6">
//                   <div className="form-check">
//                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                       <Form.Check type="checkbox" label="Remember Me" />
//                     </Form.Group>
//                   </div>
//                 </div>
//                 <div className="col-lg-6 text-end">
//                   <p onClick={passwordResetEmail} className="forgot_password">
//                     Forgot Password ?
//                   </p>
//                 </div>
//               </div>
//               <div className="submit_btn mb-3">
//                 <input className="regular_btn" type="submit" value="Login" />
//               </div>
//               <p className="text-center link_text">
//                 Don’t have an account ?
//                 <Link to="/register">
//                   <span>Create an account</span>
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
