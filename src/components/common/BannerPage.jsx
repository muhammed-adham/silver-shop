import React from "react";
import { Link } from "react-router-dom";

const BannerPage = ({img, currentPage, primaryPage, secondaryPage}) => {
  return (
    <>
      <section className="bannerPage">
        <img src={img} alt="" />
        <div className="overlay">
          <div className="container">
              <h4>{currentPage}</h4>
            <div className="crumbs">
              <Link to={`/`}><h6>{primaryPage}</h6></Link>
              <Link to={`/${secondaryPage}`}><h6>{secondaryPage}</h6></Link>
              <h6>{currentPage}</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerPage;
