import React from "react";
import BannerPage from "../common/BannerPage";
import CardCategory from "../common/CardCategory";

const Categories = () => {
  const categories = ["necklace", "pendant", "ring", "preclate"];
  return (
    <>
      <BannerPage
        currentPage={"categories"}
        primaryPage={"home"}
        img={"/images//banners/banner-category.jpg"}
      />
      <section className="sec-category">
        <div className="container">
          {categories.map((cat, idx) => (
            <CardCategory tag={cat}/>
          ))}
        </div>
      </section>
    </>
  );
};

export default Categories;
