/* eslint-disable react/jsx-key */
import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
import Container from "../../components/Container";
import useFetch from "../../hooks/useFetch";
import { PropagateLoader } from "react-spinners";

const Testimonials = () => {
  const { data, loader } = useFetch("http://localhost:5001/api/v1/review");

  if (loader) {
    return (
      <p className="h-screen flex items-center justify-center">
        <PropagateLoader color="#BB8506" />
      </p>
    );
  }

  return (
    <Container>
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {data?.map((review) => (
          <SwiperSlide>
            <div className="text-center w-10/12 mx-auto mt-5">
              <div className="flex flex-col justify-center items-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className="w-20 h-20 my-10"></FaQuoteLeft>
              </div>
              <p>{review.details}</p>
              <h3 className="text-[#BB8506] text-xl font-medium mt-2">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonials;
