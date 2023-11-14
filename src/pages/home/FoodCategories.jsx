import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/Container";

const FoodCategories = () => {
  return (
    <Container>
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            SALAD
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            PIZZA
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            SOUP
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            DESSERTS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            BURGER
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            SALAD
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            PIZZA
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            SOUP
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            DESSERTS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            BURGER
          </h3>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default FoodCategories;
