import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import ServicesDetails from "./Components/ServicesDetails/ServicesDetails";
import Login from "./Components/Login/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Contact from "./Components/Contact/Contact";
// import MyOrder from "./Components/AfterLogin/MyOrder/MyOrder";
import ManegeAllOrder from "./Components/AfterLogin/ManegeAllOrder/ManegeAllOrder";
// import { AddService } from "./Components/AddService/AddService";
import ManageServices from "./Components/ManageServices/ManageServices";
import AboutUs from "./Components/AboutUs/AboutUs";
import Explore from "./Components/Home/Explore/Explore";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
// import Login from "./Components/Login/Login/Login";
// import Register from "./Components/Login/Register/Register";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/servicesDetails/:name">
              <ServicesDetails></ServicesDetails>
            </PrivateRoute>
            {/* <Route path="/addService">
              <AddService></AddService>
            </Route> */}
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* <Route path="/register">
              <Register></Register>
            </Route> */}
            <Route path="/register">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            {/* <Route path="/myorders">
              <MyOrder></MyOrder>
            </Route> */}
            <Route path="/myallorders">
              <ManegeAllOrder></ManegeAllOrder>
            </Route>
            <Route path="/manegeService">
              <ManageServices></ManageServices>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
