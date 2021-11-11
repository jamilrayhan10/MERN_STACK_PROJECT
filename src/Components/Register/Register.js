// import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import {
//   Alert,
//   Button,
//   CircularProgress,
//   Container,
//   TextField,
//   Typography,
// } from "@mui/material";
// import CardMedia from "@mui/material/CardMedia";
// import LoginImg from "../../../images/login.png";
// import { NavLink, useHistory } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";

// const Register = () => {
//   const [loginData, setLoginData] = useState({});
//   const history = useHistory();
//   const { user, registerUser, isLoading, authError } = useAuth();

//   const logInHandleOnBlur = (e) => {
//     const field = e.target.name;
//     const value = e.target.value;
//     const loginNewData = { ...loginData };
//     loginNewData[field] = value;
//     setLoginData(loginNewData);
//   };
//   // console.log(loginData);
//   const submitLogin = (e) => {
//     if (loginData.password !== loginData.password2) {
//       alert("please confirm your password");
//       return;
//     }
//     registerUser(loginData.email, loginData.password, loginData.name, history);

//     e.preventDefault();
//   };
//   return (
//     <>
//       <Container>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             {!isLoading && (
//               <form onSubmit={submitLogin}>
//                 <Typography variant="h4" component="div" sx={{ mt: "20%" }}>
//                   Register Now
//                 </Typography>
//                 <TextField
//                   id="standard-basic"
//                   label="your name"
//                   variant="standard"
//                   name="name"
//                   onBlur={logInHandleOnBlur}
//                   sx={{ width: "75%", mt: "10%" }}
//                 />
//                 <TextField
//                   id="standard-basic"
//                   label="your email"
//                   variant="standard"
//                   type="email"
//                   name="email"
//                   onBlur={logInHandleOnBlur}
//                   sx={{ width: "75%", mt: 2 }}
//                 />
//                 <TextField
//                   id="standard-basic"
//                   label="your password"
//                   variant="standard"
//                   type="password"
//                   name="password"
//                   onBlur={logInHandleOnBlur}
//                   sx={{ width: "75%", my: 2 }}
//                 />
//                 <TextField
//                   id="standard-basic"
//                   label="re-type your password"
//                   variant="standard"
//                   type="password"
//                   name="password2"
//                   onBlur={logInHandleOnBlur}
//                   sx={{ width: "75%" }}
//                 />
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   sx={{
//                     m: "20px auto",
//                     display: "block",
//                     padding: "10px 40px",
//                     width: "75%",
//                     backgroundColor: "#11CFE3",
//                   }}
//                 >
//                   Register
//                 </Button>
//                 <NavLink to="/login">
//                   <Button variant="text">
//                     already register ? please logign
//                   </Button>
//                 </NavLink>
//               </form>
//             )}
//             {isLoading && <CircularProgress sx={{ marginTop: "400px" }} />}
//             {user?.email && (
//               <Alert severity="success"> your register success!</Alert>
//             )}
//             {authError && <Alert severity="error">{authError}</Alert>}
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <CardMedia
//               component="img"
//               sx={{ width: "100%", height: "100vh" }}
//               image={LoginImg}
//               alt="Paella dish"
//             />
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// };

// export default Register;
