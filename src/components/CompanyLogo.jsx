import React from 'react'
import slack from '../assets/slack.png'
import amazon from '../assets/amazon.png'
import woocommerce from '../assets/woocommerce.png'
import google from '../assets/google.png'
import youtube from '../assets/youtube.png'
const CompanyLogo = () => {
  return (
    <div className='w-full container mx-auto py-20 px-4 sm:px-6 lg:px-8 
    sm:flex-row flex-col sm:items-center items-start'>
      <div className='w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base
      text-xl font-semibold text-left'>Proud partner at <br>Hotspot & Segement</br></div>
    </div>
  )
}

export default CompanyLogo
