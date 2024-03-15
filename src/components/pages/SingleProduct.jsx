import React from "react";
import BannerPage from "../common/BannerPage";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { displaySingleProduct } from "../../utils/axiosConfig";
import CardSingleItem from "../common/CardSingleItem";

const SingleProduct = () => {
  const { id } = useParams();

  const { data } = useQuery("singleProduct", () => displaySingleProduct(id));
  return (
    <>
      <BannerPage
        currentPage={data?.data.productName}
        primaryPage={"home"}
        secondaryPage={"shop"}
        img={"/images/banners/banner-shop.jpg"}
      />
      <CardSingleItem
        image={data?.data.image}
        productName={data?.data.productName}
        description={data?.data.details}
        price={data?.data.onSale?data?.data.newPrice:data?.data.oldPrice}
      />
    </>
  );
};

export default SingleProduct;
