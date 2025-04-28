import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import IpadImg from "../../assets/HomeCatImg/ipad-HCI-1.jpg";
import TshirtImg from "../../assets/HomeCatImg/Tshirt-HCI-2.jpg";
import WatchImg from "../../assets/HomeCatImg/Watch-HCI-3.jpg";
import RingImg from "../../assets/HomeCatImg/Ring-HCI-4.jpg";
import ChairImg from "../../assets/HomeCatImg/Chair-HCI-5.jpg";
import ShoeImg from "../../assets/HomeCatImg/Shoe-HCI-6.jpg";
import PurseImg from "../../assets/HomeCatImg/Purse-HCI-7.jpg";
import Controller from "../../assets/HomeCatImg/Controller-HCI-8.jpg";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  const CAT_IMAGES = [
    {
      src: IpadImg,
      text: "Smart Tablets",
      path: "/"
    },
    {
      src: TshirtImg,
      text: "T-shirts",
      path: "/"
    },
    {
      src: WatchImg,
      text: "Watches",
      path: "/"
    },
    {
      src: RingImg,
      text: "Rings",
      path: "/"
    },
    {
      src: ChairImg,
      text: "Wooden Chair",
      path: "/"
    },
    {
      src: ShoeImg,
      text: "Sneakers",
      path: "/"
    },
    {
      src: PurseImg,
      text: "Purse",
      path: "/"
    },
    {
      src: Controller,
      text: "Controlers",
      path: "/"
    },
  ];
  return (
    <div className="homecatSlider">
      <div className="container">
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          className="mySwiper"
          modules={[Navigation]}
          navigation={true}
        >
          {CAT_IMAGES.map((image, index) => (
            <Link to={image.path} key={index} className="link">
            <SwiperSlide className="cursor-pointer">
              <div className="item py-4 px-1 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={image.src} alt="" />
                <h3 className="text-[18px] font-[500]">{image.text}</h3>
              </div>
            </SwiperSlide>
            </Link>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
