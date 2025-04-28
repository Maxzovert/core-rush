import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Slidder = () => {
  const SLIDER = [
    {
      src : "https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg"
    },
    {
      src : "https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg"
    },
    {
      src : "https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg"
    },
    {
      src : "https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg"
    },
    {
      src : "https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg"
    }
  ]
  return (
    <>
      <div className="homeSlider py-4">
        <div className="container">
          <Swiper 
            navigation={true}
            modules={[Navigation]}
            className="slidderHome"
            spaceBetween={15}
          >
          {
            SLIDER.map((item , index)=>(
              <SwiperSlide key={index}>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src={item.src}
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            ))
          }
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Slidder;
