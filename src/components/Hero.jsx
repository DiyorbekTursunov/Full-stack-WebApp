import "../styles/sass/home.sass/Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = ({ listings }) => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {listings.map((listing) => (
        <SwiperSlide key={listing.id}>
          <div className="listing-card">
            
            <div className="listing-details">
              <h3>{listing.address}</h3>
              <p>{listing.price}</p>
              <ul>
                <li>{listing.beds} beds</li>
                <li>{listing.baths} baths</li>
                <li>{listing.sqFt} sq ft</li>
              </ul>
              <a href="#">Read more</a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
