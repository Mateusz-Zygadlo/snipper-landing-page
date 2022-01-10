import React from 'react'
import { Button } from './Button'
import { Images } from '../assets'

export const Header = () => {
  return(
    <div className="flex flex-col w-full items-center mt-16 px-5 sm:px-10 md:px-16 lg:px-24">
      <h1 className="text-6xl text-center">Gorgeous Code Snippets</h1>
      <p className="my-3 max-w-xl lg:max-w-2xl text-center">With Snipper, create fully customizable code snippets in a matter of seconds right from your browser.</p>
      <Button />
      <p className="mt-3">No credit card required.</p>
      <img 
        src={Images.SnippetImage}
        alt="Snippet"
        className="mt-14"
      />
    </div>
  )
}