import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useQuery } from "react-query";
import { mainBannerSlides } from "../../utils/axiosConfig";

const BannerMain = () => {
  let loop;

  
  const { data } = useQuery("mainBanner", mainBannerSlides);
  
  const [slide, SetSlide] = useState(0);

  useEffect(() => {
    loop = setTimeout(nextSlide, 11000);

    return()=>{
    clearTimeout(loop);
    }

  },[slide]);

  const nextSlide = () => {
    clearTimeout(loop);
    SetSlide(slide === data?.data.length - 1 ? 0 : slide + 1);

  };

  const prevSlide = () => {
    clearTimeout(loop);
    SetSlide(slide === 0 ? data?.data.length - 1 : slide - 1);
  };




  return (
    <section className="banner">
      {data?.data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "active" : "inactive"}
          ></img>
        );
      })}
      <div className="overlay">
        <div className="container">
          <div className="slogan">
            <div className="fake"></div>
            <h5>One special piece can make such a difference</h5>
            <div className="swiper">
              <IoIosArrowBack onClick={prevSlide} />
              <IoIosArrowForward onClick={nextSlide} />
            </div>
          </div>
          <div className="indicator">
            <h1>hand made jewelry</h1>
            <div className="slider">
              <div className="thumb" style={{left:`calc((100%/${data?.data.length})*${slide})`, width:`calc(100%/${data?.data.length})`}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerMain;
