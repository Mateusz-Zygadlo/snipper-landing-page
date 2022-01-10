import React from 'react'
import { Button } from './Button'
import { Images } from '../assets'

export const Main = () => {
  return(
    <div className="px-5 sm:px-10 md:px-16 lg:px-24 py-14 flex flex-col-reverse lg:flex-row justify-between items-center">
      <div className="w-full max-w-[45rem] pr-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">A fully customizable code snippet editor</h1>
        <p className="my-3 lg:text-xl">Fully customize the color scheme of your code snippet, or use our own premade color schemes. Export your code snippets in JPG, PDF, PNG, or ant of the other 10+ common extensions.</p>
        <Button />
      </div>
      <div>
        <img 
          src={Images.CustomizableImage}
          alt="customizable"
          className="max-w-[40rem] w-full mb-10 lg:mb-0"
        />
      </div>
    </div>
  )
}