import React from 'react'
import { Helmet } from "react-helmet";

import HomeAbout from './HomeAbout'
import HomeHero from './HomeHero/HomeHero'
import HomeServices from './HomeServices/HomeServices'
import HomeCount from './HomeCount/HomeCount'
import HomeTourPackages from './HomeTourPackages/HomeTourPackages'
import HomeLast from './HomeLast/HomeLast'
import WhyUs from '../About/WhyUs/WhyUs'

const Home = () => {
return ( <div>
  <Helmet> <title>
Travel Agency in Bengaluru | Car, Cab & Bus Rental | Customized Tour Packages </title> </Helmet>


  <HomeHero />
  <div className='my-[100px]'></div>
  <HomeTourPackages />
  <HomeAbout />
  <HomeServices />
  <HomeCount />
  <WhyUs />
  {/* <HomeLast/> */}
</div>
 

);
}

export default Home;
