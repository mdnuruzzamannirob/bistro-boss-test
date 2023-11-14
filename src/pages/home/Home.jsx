import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Features from "./Features";
import FoodCategories from "./FoodCategories";
import Intro from "./Intro";
import Testimonials from "./Testimonials";
import CheckItOut from "./CheckItOut";
import CallUs from "./CallUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Bistro Boss Restaurant</title>
      </Helmet>
      <Banner></Banner>
      <FoodCategories></FoodCategories>
      <Intro></Intro>
      <CheckItOut></CheckItOut>
      <CallUs></CallUs>
      <Features></Features>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
