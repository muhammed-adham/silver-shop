import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const OrderTracking = () => {
  return (
    <>
      <div className="order-tracking-container">
        <h4>order number</h4>
        <div className="status-container">
          <div className="statu">
            <FaCheckCircle />
            <h5>delieverd</h5>
          </div>
          <div className="statu">
            <FaCheckCircle />
            <h5>out for delivery</h5>
          </div>
          <div className="statu">
            <FaCheckCircle />
            <h5>package is ready</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTracking;
