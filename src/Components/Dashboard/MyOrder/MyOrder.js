import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import "./MyOrder.css";

const MyOrder = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(
      `https://afternoon-wave-02236.herokuapp.com/myorders/${userEmail}`
    ).then((res) => res.json().then((data) => setMyOrders(data)));
  }, [userEmail]);
  const handleDelete = (id) => {
    const deleteConfirm = window.confirm("Are you sure , you want to delete?");
    if (deleteConfirm) {
      const url = `https://afternoon-wave-02236.herokuapp.com/myorders/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("deleted");
            const deleteId = myOrders.filter((service) => service._id !== id);
            console.log("delete", deleteId);
            setMyOrders(deleteId);
          }
        });
    }
  };
  return (
    <div className="order_section">
      {myOrders.length === 0 ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div>
            <h2 className="text-center text-uppercase">my order </h2>
            <div className="row">
              {myOrders.map((order) => (
                <div className="col-lg-3 " key={order._id}>
                  <div className="order_card p-3 border">
                    <img src={order?.servicesItem?.img} alt="" />
                    <h5 className="py-2">{order?.servicesItem?.name}</h5>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="btn btn-info px-3"
                    >
                      Cancel <i className="fas fa-backspace text-light"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrder;
