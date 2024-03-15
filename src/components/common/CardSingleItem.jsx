import React from "react";

const CardSingleItem = ({ image, productName, description, price }) => {
  return (
    <>
      <div className="container section-container">
        <section className="card-container">
          <div className="image-container">
            <img src={image} alt="" />
          </div>
          <div className="context">
            <div className="heading">
              <h3>{productName}</h3>
              <p>{description}</p>
            </div>
            <hr />
            <div className="info">
              <span>{price}</span>
              <div className="cta">
                <button>add to cart</button>
                <button>add to wishlist</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardSingleItem;
