import React from 'react'
import { Images } from '../assets'

export const Footer = () => {
  return(
    <div className="w-full px-5 sm:px-10 md:px-16 lg:px-24 flex flex-col sm:flex-row justify-between items-center py-10">
      <img 
        src={Images.Logo}
        alt="logo"
        className="mb-2 sm:mb-0"
      />
      <div className="flex">
        <p className="mx-3 border-b hover:border-black transition-colors duration-500 cursor-pointer">Terms and Conditions</p>
        <p className="mx-3 border-b hover:border-black transition-colors duration-500 cursor-pointer">Privacy Policy</p>
      </div>
    </div>
  )
}