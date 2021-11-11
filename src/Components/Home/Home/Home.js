import React from "react";
import Update from "../../Home/Update/Update";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Testimonial from "../../Testimonial/Testimonial";
import HeroBanner from "../HeroBanner/HeroBanner";
import IntroducingTeam from "../IntroducingTeam/IntroducingTeam";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Header></Header>
      <HeroBanner></HeroBanner>
      <Services></Services>
      <IntroducingTeam></IntroducingTeam>
      <Update></Update>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  );
};

export default Home;
