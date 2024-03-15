import React from "react";
import OrderTracking from "./OrderTracking";

const Activity = () => {
  return (
    <>
      <div className="activity-container">
        <div className="orders">
          <OrderTracking />
        </div>
        {/* <div className="vector-shape">
          <img src="/images/png/Delivery Couriers Illustration.svg" alt="" />
        </div> */}
      </div>
    </>
  );
};

export default Activity;
