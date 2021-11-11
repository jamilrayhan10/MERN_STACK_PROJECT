import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  // use auth
  const { user, admin, isLoading } = useAuth();

  // loading
  if (isLoading) {
    return <Spinner animation="border" />;
  }

  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          user?.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
      ></Route>
    </>
  );
};

export default AdminRoute;
