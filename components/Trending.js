"use client"
import React from 'react'
import '../styles/trending.css'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const trends = [
  {
    id: 1,
    name: 'vinpearl nha trang',
    location: 'nha trang, vn',
    img: 'https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/t-1.jpg?raw=true',
    activites: 10,
    places: 12,
    days: '1 weeks',
    price: 1.2
  },
  {
    id: 2,
    name: 'vinpearl nha trang',
    location: 'nha trang, vn',
    img: 'https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/t-1.jpg?raw=true',
    activites: 10,
    places: 12,
    days: '1 weeks',
    price: 1.2
  },
  {
    id: 3,
    name: 'vinpearl nha trang',
    location: 'nha trang, vn',
    img: 'https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/t-1.jpg?raw=true',
    activites: 10,
    places: 12,
    days: '1 weeks',
    price: 1.2
  },
  {
    id: 4,
    name: 'vinpearl nha trang',
    location: 'nha trang, vn',
    img: 'https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/t-1.jpg?raw=true',
    activites: 10,
    places: 12,
    days: '1 weeks',
    price: 1.2
  },
  {
    id: 5,
    name: 'vinpearl nha trang',
    location: 'nha trang, vn',
    img: 'https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/t-1.jpg?raw=true',
    activites: 10,
    places: 12,
    days: '1 weeks',
    price: 1.2
  }
]

const Trending = () => {
  return (
    <section id='trending'>
      <div className="heading">
        <h2>Trending 2023</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, tenetur!</p>
      </div>

      <div className="wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            800: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }}
        >
          {
            trends.map(trend => (
              <SwiperSlide key={trend.id}>
                <div className="card">
                  <div className="title">
                    <span><i className='fas fa-map-marker-alt'></i> {trend.location}</span>
                    <a href="#">{trend.name}</a>
                  </div>

                  <div className="img-container">
                    <Image src={trend.img} alt={trend.img} width={350} height={170} />
                  </div>

                  <div className="text">
                    <span><i className='fa-solid fa-shoe-prints'></i> {trend.activites} Activites</span>
                    <span><i className='fa-solid fa-compass'></i> {trend.places} Places</span>
                    <span><i className='fa-solid fa-calendar-days'></i> {trend.days}</span>
                  </div>

                  <hr />

                  <div className="price">
                    <p>From ${trend.price} <span>/Person</span></p>
                    <a href="#">Book Now</a>
                  </div>

                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>

    </section>
  )
}

export default Trending
