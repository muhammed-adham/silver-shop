import React, { useEffect } from "react";
import BannerMain from "../common/BannerMain";
import SectionTopSale from "../common/SectionTopSale";
import SectionNewArrivals from "../common/SectionNewArrivals";
import SectionAd from "../common/SectionAd";
import JoinUs from "../common/JoinUs";

const Home = () => {

  return (
    <>
      <BannerMain />
      <SectionTopSale />
      <SectionAd
        backgroundImageUrl={"/images/ads/ad-1.jpg"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ipsa quo."
        }
      />
      <SectionNewArrivals />
      <SectionAd
        backgroundImageUrl={"/images/ads/ad-2.jpg"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ipsa quo."
        }
      />
      <JoinUs/>
    </>
  );
};

export default Home;
