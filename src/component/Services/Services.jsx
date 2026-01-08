import React from 'react'
import serviceBg from "../../assets/serviceBg.jpg"
import HomeTourPackages from '../Home/HomeTourPackages/HomeTourPackages'
import ServiceTypes from './ServiceTypes/ServiceTypes'
const Services = () => {
  return (
    <>
      <img src={serviceBg} className='h-[50vh] object-cover object-center w-full'/>
      <HomeTourPackages/>
      <ServiceTypes/>
    </>
  )
}

export default Services

