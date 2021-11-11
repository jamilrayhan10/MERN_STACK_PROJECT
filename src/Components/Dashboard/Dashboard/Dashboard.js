import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddAProduct from "../AddAProduct/AddAProduct";
import Pay from "../Pay/Pay";
import MyOrder from "../MyOrder/MyOrder";
import ManegeAllOrder from "../ManegeAllOrder/ManegeAllOrder";
import useAuth from "../../../Hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import Review from "../Review/Review";
import Logo from "../../images/clocklogo.png";
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin, user, logout } = useAuth();
  return (
    <div className="dashboard">
      <div className="">
        <div className="dashboard_header">
          <h2>Dashboard</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 dashboardLink">
            <img className="m-2" src={Logo} alt="" />
            <Navbar expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                  <Nav className="p-2 d-block">
                    {!admin && (
                      <div>
                        <i class="fas fa-cart-plus me-2"></i>
                        <Link to={`${url}/myorder`}>My Order</Link> <br />
                        <i class="fas fa-text-width me-2"></i>
                        <Link to={`${url}/review`}>Review</Link> <br />
                        <i class="fab fa-amazon-pay me-2"></i>
                        <Link to={`${url}/pay`}>Pay</Link> <br />
                      </div>
                    )}

                    {admin && (
                      <div>
                        <i class="fas fa-user-plus me-2"></i>
                        <Link to={`${url}/makeadmin`}>Make Admin</Link> <br />
                        <i class="fas fa-plus-square me-2"></i>
                        <Link to={`${url}/adproduct`}>Add Product</Link> <br />
                        <i class="fas fa-cart-plus me-2"></i>
                        <Link to={`${url}/olorder`}>All Order</Link> <br />
                      </div>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <div className="mx-4 my-4">
              {user.email && (
                <Link to="/">
                  <button onClick={logout} className="regular_btn my-2">
                    Logout
                  </button>
                </Link>
              )}
              <br />
              <Link to="/home">Go to Home</Link>
            </div>
          </div>
          <div className="col-lg-9">
            <Switch>
              <Route path={`${path}/myorder`}>
                <MyOrder></MyOrder>
              </Route>
              <Route path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>

              <AdminRoute path={`${path}/makeadmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute path={`${path}/olorder`}>
                <ManegeAllOrder></ManegeAllOrder>
              </AdminRoute>
              <AdminRoute path={`${path}/adproduct`}>
                <AddAProduct></AddAProduct>
              </AdminRoute>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
