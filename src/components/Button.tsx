import React from 'react'

export const Button = () => {
  return(
    <button className=" px-5 py-3 flex justify-center items-center bg-black text-white rounded-lg border-2 border-black hover:bg-white hover:text-black transition-colors duration-1000">
      Get started<span className="text-gray-600 ml-1">- it's free</span>
    </button>
  )
}