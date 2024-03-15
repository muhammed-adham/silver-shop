import React, { useContext } from "react";
import { IoCloseCircle, IoEyeSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { isMobileContext } from "../../context/isMobContext";


const CardFeatured = ({
  price,
  description,
  image,
  onView,
  onWish,
  onCart,
  wishClass,
  onRemove,
  removeClass,
  cartClass,
  onDragStart,
  onDragEnter,
  onDragEnd,
  onDragOver,
}) => {

  const {isMobile}= useContext(isMobileContext)

  return (
    <>
      <div
        onClick={isMobile?onView:null}
        className="fcard"
        draggable
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        onDragEnter={onDragEnter}
        onDragEnd={onDragEnd}
      >
        <span>{price}</span>
        <div className={`remove-wish ${removeClass}`} onClick={onRemove}>
          <IoCloseCircle />
        </div>
        <div className="actions">
          <div className="view action" onClick={onView}>
            <IoEyeSharp />
          </div>
          <div className={`wish action ${wishClass}`} onClick={onWish}>
            <FaHeart />
          </div>
          <div className={`cart action ${cartClass}`} onClick={onCart}>
            <FaCartShopping />
          </div>
        </div>
        <img src={image} alt="" />
        <p>{description}</p>
      </div>
    </>
  );
};

export default CardFeatured;
