import React, { useEffect, useState } from "react";
// import MyOrder from "../MyOrder/MyOrder";

const ManegeAllOrder = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-wave-02236.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
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
            const deleteId = allOrders.filter((service) => service._id !== id);
            console.log("delete", deleteId);
            setAllOrders(deleteId);
          }
        });
    }
  };
  return (
    <div className="mt-5 pt-5">
      {allOrders.length === 0 ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div style={{ marginTop: "100px" }}>
            <div className="row">
              {allOrders.map((all) => (
                <div className="col-lg-4 " key={all._id}>
                  <div className=" p-3 d-flex border my-3">
                    <img
                      style={{ width: "150px" }}
                      src={all?.servicesItem?.img}
                      alt=""
                    />
                    <div className="deletebtn ms-2 mt-2">
                      <h6 className="py-2 fw-bold">
                        {all?.servicesItem?.name}
                      </h6>
                      <button
                        onClick={() => handleDelete(all._id)}
                        className="btn btn-danger"
                      >
                        delete
                      </button>
                      <button className="btn btn-info ms-2">Approved</button>
                    </div>
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

export default ManegeAllOrder;
