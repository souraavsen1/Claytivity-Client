import React from "react";
import Slider from "./Slider/Slider";
import HomeProducts from "./HomeProducts/HomeProducts";
import Reviews from "./Reviews/Reviews";
import NavbarSection from "../../Shared/Navbar/NavbarSection";
import About from "./AboutSection/About";

const Home = () => {
  return (
    <>
      <NavbarSection></NavbarSection>
      <div>
        <Slider></Slider>
        <About></About>
        <HomeProducts></HomeProducts>
        <Reviews></Reviews>
      </div>
    </>
  );
};

export default Home;
