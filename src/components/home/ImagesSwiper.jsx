import { Container } from "@mui/material";
import { Autoplay, Pagination, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { images } from "../../assets/images/home";

const ImagesSwiper = () => {
  const options = {
    modules: [Pagination, Autoplay, Lazy],
    autoplay: { delay: 6000 },
    pagination: true,
    spaceBetween: 10,
    lazy: true,
    style: {
      "--swiper-pagination-color": "#eca440",
    },
  };

  return (
    <Container sx={{ p: "0 !important" }}>
      <Swiper {...options}>
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="home-slide">
            <img
              src={img}
              width="100%"
              style={{ borderRadius: "15px" }}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ImagesSwiper;
