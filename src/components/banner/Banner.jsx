import React from "react";
import "./banner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Banner = () => {
  return (
    <div className="banner" id="banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Swiper
              pagination={{
                clickable: true,
              }}
              loop={true}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="mySwiper">
              <SwiperSlide>
                <div className="bannerContent">
                  <span>The Chloe Collection</span>
                  <h1>The Project Jacket</h1>
                  <a href="#">shop now</a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bannerContent">
                  <span>The Chloe Collection</span>
                  <h1>The Project Jacket</h1>
                  <a href="#">shop now</a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bannerContent">
                  <span>The Chloe Collection</span>
                  <h1>The Project Jacket</h1>
                  <a href="#">shop now</a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
