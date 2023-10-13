import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../image/IMG_20190109_102659_HDR-modified.png";
import profilePic2 from "../../image/Chandan Sir.png";
import profilePic3 from "../../image/Sumit Sir.png";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      Name:"Saurabh Sir",
      expreience: "5+ years teaching expreience",
      qualification:"M.Tech (JNU)",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      Name:"Saurabh Sir",
      expreience: "5+ years teaching expreience",
      qualification:"M.Tech (JNU)",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic3,
      Name:"Saurabh Sir",
      expreience: "5+ years teaching expreience",
      qualification:"M.Tech (JNU)",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      Name:"Saurabh Sir",
      expreience: "5+ years teaching expreience",
      qualification:"M.Tech (JNU)",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        {/* <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span> */}
        <span>Enjoy classes with </span>
        <span>Exceptional Faculties </span>
        <span>of ours...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                {/* <span>{client.review}</span> */}
                <span>{client.Name}</span>
                <span>{client.qualification}</span>
                <span>{client.expreience}</span>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
