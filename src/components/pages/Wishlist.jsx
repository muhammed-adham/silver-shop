import React, { useContext, useEffect, useRef, useState } from "react";
import BannerPage from "../common/BannerPage";
import CardFeatured from "../common/CardFeatured";
import { useQuery } from "react-query";
import {
  addCartlistConfig,
  displayCartlist,
  displayWishlist,
  getProducts,
  removeCartlistConfig,
  removeWishlistConfig,
} from "../../utils/axiosConfig";
import { useNavigate } from "react-router-dom";
import EmptyPage from "../common/EmptyPage";
import { wishCountContext } from "../../context/wishCountContext";
import { cartCountContext } from "../../context/cartCountContext";

const Wishlist = () => {
  const { data: wishlistData } = useQuery("getWishlist", displayWishlist);

  const { data: productsData, isSuccess } = useQuery(
    "getProducts",
    getProducts
  );

  const { data: cartlistData } = useQuery("cartlist", displayCartlist);
  const cartIdArray = cartlistData?.data.map((el) => el.id);
  const { cartCount, setCartCount } = useContext(cartCountContext);
  const cartAddHandler = (e, item) => {
    e.currentTarget.classList.contains("active-cart")
      ? (removeCartlistConfig(item.id),
        e.currentTarget.classList.remove("active-cart"),
        setCartCount(cartCount - 1))
      : (addCartlistConfig(item),
        e.currentTarget.classList.add("active-cart"),
        setCartCount(cartCount + 1));
  };

  const wishIdArray = wishlistData?.data.map((el) => el.id); // Wishlist Ids used to filter data

  const { wishCount, setWishCount } = useContext(wishCountContext);

  useEffect(() => {
    if (isSuccess) {
      setDatafunc(); // Function to fetch data from the database once page is loaded
    }
  }, [productsData]);

  const [stateData, setStateData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  // Set the state with the fetched data
  const setDatafunc = () => {
    setStateData(productsData?.data);
  };

  const removeWishHandler = (itemId) => {
    removeWishlistConfig(itemId);
    // Update the state to trigger a rerender
    //----------------------------------------
    setStateData((prevData) => prevData.filter((item) => item.id !== itemId));
    //----------------------------------------
    setWishCount(wishCount - 1);
  };

  const navigate = useNavigate();

  let itemDragSt = useRef();
  let itemDragEnd = useRef();

  const handleDragStart = (e, idx) => {
    itemDragSt.current = idx;
  };
  //------------------------------------------

  const handleDragEnter = (e, idx) => {
    itemDragEnd.current = idx;
  };
  //------------------------------------------

  const handleDragEnd = (e, idx) => {
    console.log("drag end");

    const arr11=[...stateData]
    const draggedItem = arr11[itemDragSt.current]
    arr11.splice(itemDragSt.current,1) //delete item from current position
    arr11.splice(itemDragEnd.current,0,draggedItem)  //put item to new position

    itemDragSt.current=null
    itemDragEnd.current=null

    setStateData(arr11)

  };
  //------------------------------------------

  const handleDragOver = (e, idx) => {
    e.preventDefault()

  };

  return (
    <>
      <BannerPage
        currentPage={"Wishlist"}
        primaryPage={"home"}
        img={"/images/banners/banner-list.jpg"}
      />
      <div className="container wish-cards-container">
        {wishCount > 0 ? (
          stateData.map((item, idx) => {
            if (wishIdArray?.includes(item.id)) {
              return (
                <CardFeatured
                  onDragStart={(e) => handleDragStart(e, idx)}
                  onDragEnter={(e) => handleDragEnter(e, idx)}
                  onDragEnd={(e) => handleDragEnd(e, idx)}
                  onDragOver={(e) => handleDragOver(e, idx)}
                  description={item.description}
                  image={item.image}
                  price={item.onSale ? item.newPrice : item.oldPrice}
                  key={item.id}
                  id={item.id}
                  onView={() => navigate(`/shop/product/${item.id}`)}
                  onRemove={() => removeWishHandler(item.id)}
                  cartClass={cartIdArray?.includes(item.id) && "active-cart"}
                  onCart={(e) => cartAddHandler(e, item)}

                  // onCart={()=>}
                  wishClass={"inactive"}
                />
              );
            }
          })
        ) : (
          <EmptyPage currentPage={"wishlist"} />
        )}
      </div>
    </>
  );
};

export default Wishlist;
