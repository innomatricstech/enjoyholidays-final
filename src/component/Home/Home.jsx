import React from "react";
import { Helmet } from "react-helmet";

import HomeAbout from "./HomeAbout";
import HomeHero from "./HomeHero/HomeHero";
import HomeServices from "./HomeServices/HomeServices";
import HomeCount from "./HomeCount/HomeCount";
import HomeTourPackages from "./HomeTourPackages/HomeTourPackages";
import WhyUs from "../About/WhyUs/WhyUs";

 
const Home = () => {
  return (
    <div>

      {/* ✅ SEO Meta */}
      <Helmet>
        <title>
          Travel Agency in Bengaluru | Car, Cab & Bus Rental | Customized Tour Packages
        </title>

        <meta
          name="description"
          content="Best travel agency in Bengaluru offering car, cab, and bus rentals with customized tour packages across India."
        />

        <meta
          name="keywords"
          content="Travel Agency Bengaluru, Car Rental, Cab Rental, Bus Rental, Tour Packages"
        />
      </Helmet>

      {/* ✅ Page Sections */}
      <HomeHero />

      {/* Spacer */}
      <div className="my-[100px]" />

      <HomeTourPackages />
      <HomeAbout />
      <HomeServices />
      <HomeCount />
      <WhyUs />

      {/* Future Section */}
      {/*
      <HomeLast />
      */}

    </div>
  );
};

export default Home;
