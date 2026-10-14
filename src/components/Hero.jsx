import React from 'react'

const Hero = () => {
  return (
    <Section className='container mx-auto flex flex-col md:flex-row justify-between items-centerpt-44 pb-6 px-4 sm:px-6 lg:px-8'>
      {/* left column */}
      <div className='w-full md:w-1/2 space-y-8'>
        {/* star badage */}
        <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 
           group cursor-pointer transition-colors'>
          <span className='text-blue-600 group-hover:text-amber-300 group-hover:scale-110 transition-transform'>⭐</span>
          <span className='text-sm font-medium text-gray-700'>Jump start your growth</span>
        </div>
      </div>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black-900'>We boost the growth for 
        <span className='text-blue-600 relative inline-block'>startup to fortune 500</span> companies<span>⏰</span></h1>

      {/* right column */}
      <div className='w-full md:w-1/2'>
        Right
      </div>

    </Section>
  )
}

export default Hero
