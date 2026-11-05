import React from 'react'
import slack from '../assets/slack.png'
import amazon from '../assets/amazon.png'
import woocommerce from '../assets/woocommerce.png'
import google from '../assets/google.png'
import youtube from '../assets/youtube.png'
const CompanyLogo = () => {
      const logos= [ slack, amazon, woocommerce, google, youtube, slack, amazon, woocommerce, google, youtube]
  return (
    <div className='w-full container overflow-hidden mx-auto py-20 gap-8 px-4 sm:px-6 lg:px-8 
    flex sm:flex-row flex-col sm:items-center items-start'>
      <div className='w-75 shrink-0 px-5 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base
      text-xl font-semibold text-left'>Proud partner at 
      <br />Hotspot &  Segement</div>

      <div className='w-full flex-1 min-w-0 overflow-hidden'>
        <div className='flex w-max animate-marquee whitespace-nowrap'>
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="company logo"
            className="mx-4 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0
            hover:opacity-100 transition-all" />
          ))}
        </div>
      </div>

    </div>
  )
}

export default CompanyLogo
