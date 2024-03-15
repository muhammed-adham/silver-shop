import React from "react";

const CardCategory = ({tag}) => {
  return (
    <>
      <div className="card-category-container">
        <div className="image-container">
          <img src="\images\products\product-13.jpg" alt="" />
        </div>
        <div className="overlay">
          <div className="tag">
            <h2>{tag}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCategory;
