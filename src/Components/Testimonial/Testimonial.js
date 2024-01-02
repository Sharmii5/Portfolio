import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { themeContext } from '../../Context'
import { useContext } from 'react'


export default function Testimonial() {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  const clients = [
    {
      img: profilepic1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi illo inventore voluptatem ducimus, delectus aliquam nam saepe esse earum, adipisci hic ea est perspiciatis consequatur consectetur commodi! Deleniti, molestiae?",
    },
    {
      img: profilepic2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi illo inventore voluptatem ducimus, delectus aliquam nam saepe esse earum, adipisci hic ea est perspiciatis consequatur consectetur commodi! Deleniti, molestiae?",
    },
    {
      img: profilepic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi illo inventore voluptatem ducimus, delectus aliquam nam saepe esse earum, adipisci hic ea est perspiciatis consequatur consectetur commodi! Deleniti, molestiae?",
    },
    {
      img: profilepic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi illo inventore voluptatem ducimus, delectus aliquam nam saepe esse earum, adipisci hic ea est perspiciatis consequatur consectetur commodi! Deleniti, molestiae?",
    },
  ];

  return (
    <div className="t-wrapper" style={{color: darkMode? 'white': ''} } id="Testimonials">
      <div className="t-heading">
        <span>Clients Always Get  </span>
        <span>Exceptional Work </span>
        <span>From me..</span>

        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
          
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/*slider*/}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
