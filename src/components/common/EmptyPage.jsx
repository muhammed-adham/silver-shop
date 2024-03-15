import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyPage = ({currentPage}) => {
    const navigate=useNavigate()
  return (
    <>
      <div className="container empty-container">
        <h4>your {currentPage} is empty</h4>
        <div className="prim-button" onClick={() => {navigate("/"),scroll(0,0)}}>
          Shop Now
        </div>
      </div>
    </>
  );
};

export default EmptyPage;
