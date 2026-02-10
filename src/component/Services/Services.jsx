import React from 'react'
import { Helmet } from "react-helmet";

import serviceBg from "../../assets/serviceBg.jpg"
import HomeTourPackages from '../Home/HomeTourPackages/HomeTourPackages'
import ServiceTypes from './ServiceTypes/ServiceTypes'

const Services = () => {
return (
<>
  <Helmet>
    <title>
      Travel & Tourism Services Bengaluru | Customized Tour Packages
    </title>

    <meta
      name="description"
      content="Travel and tourism services in Bengaluru offering customized tour packages, holiday packages, group tours, and personalized travel experiences across Karnataka."
    />

    {/* Keywords Block 1 */}
    <meta
      name="keywords"
      content="travel and tourism services Bengaluru, travel agency in Bangalore, tour operators in Bengaluru, customized tour packages Bangalore, holiday packages from Bengaluru, personalized tours Karnataka, group tour organizers Bangalore"
    />

    {/* Keywords Block 2 */}
    <meta
      name="keywords"
      content="car rental in Bengaluru, cab services Bangalore, taxi hire Bengaluru, car on rent with driver Bangalore, tempo traveller rental Bengaluru, minibus hire Bangalore, luxury bus rental Bengaluru"
    />

    {/* Keywords Block 3 */}
    <meta
      name="keywords"
      content="customized holiday packages, vacation trip planners Bangalore, spiritual tour packages Karnataka, pilgrimage tours from Bengaluru, sacred travel tours India, weekend getaway packages Bangalore, family tour packages Bengaluru"
    />

  </Helmet>

  {/* Banner Image */}
  <img
    src={serviceBg}
    className='h-[50vh] object-cover object-center w-full'
    alt="Travel services Bengaluru"
  />

  {/* Sections */}
  <HomeTourPackages />
  <ServiceTypes />

</>
)
}

export default Services;
