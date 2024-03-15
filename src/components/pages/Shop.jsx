import React, { useContext, useEffect, useState } from "react";
import BannerPage from "../common/BannerPage";
import { useQuery } from "react-query";
import {
  addCartlistConfig,
  addWishlistConfig,
  displayCartlist,
  displayWishlist,
  getProducts,
  removeCartlistConfig,
  removeWishlistConfig,
} from "../../utils/axiosConfig";
import CardFeatured from "../common/CardFeatured";
import { useNavigate } from "react-router-dom";
import { wishCountContext } from "../../context/wishCountContext";
import { cartCountContext } from "../../context/cartCountContext";

const Shop = () => {
  const { data: allProducts } = useQuery("allProducts", getProducts);
  const { data: wishlistData } = useQuery("wishlist", displayWishlist);
  const { data: cartlistData } = useQuery("cartlist", displayCartlist);

  const { wishCount, setWishCount } = useContext(wishCountContext);
  const { cartCount, setCartCount } = useContext(cartCountContext);

  const wishIdArray = wishlistData?.data.map((el) => el.id);
  const cartIdArray = cartlistData?.data.map((el) => el.id);

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

  const navigate = useNavigate();

  const radioFilter = [
    "all",
    "necklaces",
    "pendants",
    "bracelets",
    "earrings",
    "rings",
    "chains",
    "anklets",
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(()=>{
    
    document.getElementById('all').setAttribute("checked",'')
  })

  const handleFilter = (e) => {
    setSelectedCategory(e.target.value);
  };
  // console.log(allProducts?.data.filter((el) => el.category == selectedCategory));

  return (
    <>
      <BannerPage
        currentPage={"shop"}
        primaryPage={"home"}
        img={"/images//banners/banner-shop.jpg"}
      />
      <section className="shop-sec">
        <div className="container">
          <div className="filter">
            <form action="">
              <div className="form-title">
                <h4>category</h4>
              </div>
              <div className="form-container">
                {radioFilter.map((tag, idx) => {
                  return (
                    <div key={idx} className="filter-group">
                      <input
                        onChange={(e) => {
                          handleFilter(e);
                        }}
                        type="radio"
                        id={tag}
                        name="category"
                        value={tag}
                      />
                      <label htmlFor={tag}>{tag}</label>
                    </div>
                  );
                })}
              </div>
            </form>
          </div>
          <div className="cards-container">
            {selectedCategory === ( null || 'all')
              ? (allProducts?.data.map((item) => {
                  return (
                    <CardFeatured
                      cartClass={
                        cartIdArray?.includes(item.id) && "active-cart"
                      }
                      wishClass={
                        wishIdArray?.includes(item.id) && "active-wish"
                      }
                      description={item.description}
                      image={item.image}
                      price={item.onSale ? item.newPrice : item.oldPrice}
                      key={item.id}
                      id={item.id}
                      onView={() => {
                        navigate(`/shop/product/${item.id}`), scroll(0, 0);
                      }}
                      onWish={(e) => wishAddHandler(e, item)}
                      onCart={(e) => cartAddHandler(e, item)}
                      removeClass={"inactive"}
                    />
                  );
                }))
              : (allProducts?.data
                  .filter((el) => el.category == selectedCategory).length==0?
                  (<p style={{color:'red'}}>we regret to inform you that all products in this category are out of stock right now</p>):
                  allProducts?.data
                  .filter((el) => el.category == selectedCategory)
                  .map((item) => {
                    return (
                      <CardFeatured
                        cartClass={
                          cartIdArray?.includes(item.id) && "active-cart"
                        }
                        wishClass={
                          wishIdArray?.includes(item.id) && "active-wish"
                        }
                        description={item.description}
                        image={item.image}
                        price={item.onSale ? item.newPrice : item.oldPrice}
                        key={item.id}
                        id={item.id}
                        onView={() => {
                          navigate(`/shop/product/${item.id}`), scroll(0, 0);
                        }}
                        onWish={(e) => wishAddHandler(e, item)}
                        onCart={(e) => cartAddHandler(e, item)}
                        removeClass={"inactive"}
                      />
                    );
                  }))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
