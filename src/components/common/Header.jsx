import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { FaFacebook, FaHeart, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaCartShopping, FaSquareXTwitter } from "react-icons/fa6";
import { wishCountContext } from "../../context/wishCountContext";
import { displayCartlist, displayWishlist } from "../../utils/axiosConfig";
import { useQuery } from "react-query";
import { cartCountContext } from "../../context/cartCountContext";
import Cookies from "js-cookie";
import { isMobileContext } from "../../context/isMobContext";
import NavBarMob from "./NavBarMob";

const Header = () => {
  const { wishCount, setWishCount } = useContext(wishCountContext);
  const { cartCount, setCartCount } = useContext(cartCountContext);
  const navigate = useNavigate();

  const { data: wishlistData } = useQuery("wishlist", displayWishlist);
  const wishIdArray = wishlistData?.data.map((el) => el.id);

  const { data: cartlistData } = useQuery("cartlist", displayCartlist);
  const cartIdArray = cartlistData?.data.map((el) => el.id);

  useEffect(() => {
    setWishCount(wishIdArray?.length);
  }, [wishlistData]);

  useEffect(() => {
    setCartCount(cartIdArray?.length);
  }, [cartlistData]);

  // const {isMobile} = useContext(isMobileContext);
  const {isMobile}= useContext(isMobileContext)

  return (
    <header>
      <div className="container" id="top">
        <div className="topbar">
          <div className="socialMedia">
            <Link to={"https://facebook.com"} target={"_blank"}>
              <FaFacebook />
            </Link>
            <Link to={"https://youtube.com"} target={"_blank"}>
              <FaYoutube />
            </Link>
            <Link to={"https://instagram.com"} target={"_blank"}>
              <FaInstagram />
            </Link>
            <Link to={"https://twitter.com"} target={"_blank"}>
              <FaSquareXTwitter />
            </Link>
          </div>
          <div className="logo">silver shop</div>
          <div className="user-bearer">
            {/* {Cookies.get("access") ? ( */}
              <div className="profile">
                <div className="wishlist" onClick={() => navigate("/wishlist")}>
                  <FaHeart />
                  <span className={wishCount > 0 ? "active" : "inactive"}>
                    {wishCount}
                  </span>
                </div>
                <div className="cart" onClick={() => navigate("/cartlist")}>
                  <FaCartShopping />
                  <span className={cartCount > 0 ? "active" : "inactive"}>
                    {cartCount}
                  </span>
                </div>
                <div
                  className="userProfile"
{/*                   onClick={() => navigate("/account/activity")}
                > */}
                  <img src="/images/pp/pp-1.jpg" alt="" />
                </div>
              </div>
            {/* ) : (
              <div>
                <Link to={"/login"}>login</Link> <span> / </span>{" "}
                <Link to={"/register"}>register</Link>
              </div>
            )} */}
          </div>
        </div>
        {isMobile ? <NavBarMob /> : <Navbar />}
      </div>
    </header>
  );
};

export default Header;
