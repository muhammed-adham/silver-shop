import React, { useContext, useEffect, useState } from "react";
import CardFeatured from "./CardFeatured";
import {
  addCartlistConfig,
  addWishlistConfig,
  displayCartlist,
  displayWishlist,
  getProducts,
  removeCartlistConfig,
  removeWishlistConfig,
} from "../../utils/axiosConfig";
import { useQuery } from "react-query";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { wishCountContext } from "../../context/wishCountContext";
import { cartCountContext } from "../../context/cartCountContext";
import Cookies from "js-cookie";
import Dialog from "./Dialog";

let indicator = 0;

const SectionTopSale = () => {
  //---------------------------------
  const navigate = useNavigate();

  //API Config
  //----------------------------------
  const { data: allProducts, isSuccess } = useQuery("allProducts", getProducts);
  const { data: wishlistData } = useQuery("wishlist", displayWishlist);
  const { data: cartlistData } = useQuery("cartlist", displayCartlist);
  const wishIdArray = wishlistData?.data.map((el) => el.id);
  const cartIdArray = cartlistData?.data.map((el) => el.id);

  //Wishlist handler
  //----------------------------------
  const { wishCount, setWishCount } = useContext(wishCountContext);
  const { cartCount, setCartCount } = useContext(cartCountContext);

  const wishAddHandler = (e, item) => {
    e.currentTarget.classList.contains("active-wish")
      ? (removeWishlistConfig(item.id),
        // console.log(item.id),
        e.currentTarget.classList.remove("active-wish"),
        setWishCount(wishCount - 1))
      : (addWishlistConfig(item),
        e.currentTarget.classList.add("active-wish"),
        setWishCount(wishCount + 1));
  };

  const cartAddHandler = (e, item) => {
    e.currentTarget.classList.contains("active-cart")
      ? (removeCartlistConfig(item.id),
        e.currentTarget.classList.remove("active-cart"),
        setCartCount(cartCount - 1))
      : (addCartlistConfig(item),
        e.currentTarget.classList.add("active-cart"),
        setCartCount(cartCount + 1));
  };

  //Cards slide handler
  //----------------------------------
  const [swipeAmount, setSwipeAmount] = useState(0);

  // Top sale Products length
  const cardsLength = allProducts?.data.filter((el) => el.topSale).length;

  useEffect(() => {
    if (indicator == 0) {
      document
        .getElementsByClassName("swiper")[1]
        .getElementsByTagName("svg")[0].style.cssText =
        "visibility: hidden; cursor:default";
      document
        .getElementsByClassName("swiper")[1]
        .getElementsByTagName("svg")[1].style.cssText =
        "visibility: visible; cursor:pointer";
    } else if (indicator == cardsLength - 4) {
      document
        .getElementsByClassName("swiper")[1]
        .getElementsByTagName("svg")[1].style.cssText =
        "visibility: hidden; cursor:default";
      document
        .getElementsByClassName("swiper")[1]
        .getElementsByTagName("svg")[0].style.cssText =
        "visibility: visible; cursor:pointer";
    } else {
      document
        .getElementsByClassName("swiper")[1]
        .getElementsByTagName("svg")[0].style.cssText =
        "visibility: visible; cursor:pointer";
      document
        .getElementsByClassName("swiper")[1]
        .getElementsByTagName("svg")[1].style.cssText =
        "visibility: visible; cursor:pointer";
    }
  }, [swipeAmount]);

  const nxtBtnHandler = (e) => {
    setSwipeAmount(swipeAmount - 21.5);

    e.currentTarget.previousElementSibling.style.visibility = "visible";
    e.currentTarget.previousElementSibling.style.cursor = "pointer";
    indicator++;
    if (indicator == cardsLength - 4) {
      e.currentTarget.style.visibility = "hidden";
      e.currentTarget.style.cursor = "default";
    }
    console.log(indicator);
  };

  const prevBtnHandler = (e) => {
    setSwipeAmount(swipeAmount + 21.5);

    e.currentTarget.nextElementSibling.style.visibility = "visible";
    e.currentTarget.nextElementSibling.style.cursor = "pointer";
    indicator--;
    if (indicator == 0) {
      e.currentTarget.style.visibility = "hidden";
      e.currentTarget.style.cursor = "default";
    }
    console.log(indicator);
  };

  //Cards Indicator
  const owlDots = (idx) => {
    setSwipeAmount(idx * -21);
    indicator = idx;
  };

  const dotsIndicator = [];

  allProducts?.data.map((_, idx) => {
    if (idx < cardsLength - 3) {
      dotsIndicator.push(
        <span
          className={idx === indicator ? "active" : ""}
          key={idx}
          onClick={() => owlDots(idx)}
        ></span>
      );
    }
  });

  const [dialog, setDialog] = useState(false);

  const hh = (e) => {
    setDialog((prev) => (prev = e));
  };

  return (
    <>
      <section className="topsale">
        <div className="container">
          <div className="contentContainer">
            <div className="content">
              <div className="title">
                <h4>top sale</h4>
                <div className="strike-title"></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Pulvinar mauris
                vestibulum dui mollis.
              </p>
            </div>
            <div className={`swiper ${cardsLength <= 4 && "inactive-swiper"}`}>
              <IoIosArrowBack
                style={{ visibility: "hidden" }}
                onClick={(e) => {
                  prevBtnHandler(e);
                }}
              />
              <IoIosArrowForward
                onClick={(e) => {
                  nxtBtnHandler(e);
                }}
              />
            </div>
          </div>
        </div>
        <div className="cardsContainer">
          <div
            className="cards"
            style={{ transform: `translateX(${swipeAmount}rem)` }}
          >
            {allProducts?.data.map((item) => {
              if (item.topSale) {
                return (
                  <CardFeatured
                    cartClass={cartIdArray?.includes(item.id) && "active-cart"}
                    wishClass={wishIdArray?.includes(item.id) && "active-wish"}
                    description={item.description}
                    image={item.image}
                    price={item.onSale ? item.newPrice : item.oldPrice}
                    key={item.id}
                    id={item.id}
                    onView={() => {
                      navigate(`shop/product/${item.id}`), scroll(0, 0);
                    }}
                    // onWish={(e) => Cookies.get("user")? wishAddHandler(e, item):setDialog((prev) => (prev = true))}
                    // onCart={(e) =>  Cookies.get("user")?cartAddHandler(e, item):setDialog((prev) => (prev = true))}
                    onWish={(e) =>wishAddHandler(e, item)}
                    onCart={(e) =>cartAddHandler(e, item)}
                    removeClass={"inactive"}
                  />
                );
              }
            })}
          </div>
        </div>

        <div className="pagination">{dotsIndicator}</div>
      </section>
      {dialog ? (
        <Dialog msgAlert={"You must log in first"} confirm={'login'} onDialog={hh} />
      ) : null}
    </>
  );
};

export default SectionTopSale;
