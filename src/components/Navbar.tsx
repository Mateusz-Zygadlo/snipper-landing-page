import React, { 
  useState,
  useEffect,
} from 'react'
import { Images } from '../assets'
import { Button } from './Button'
import { 
  useMeasure,
  useWindowSize,
} from '../hooks'
import { MOBILE_SIZE } from '../constants'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [rect, myRef]: any = useMeasure()
  const { width, setWidth } = useWindowSize()

  useEffect(() => {
    if(rect) setWidth(rect.width)
  }, [rect])
  
  return(
    <div 
      className="sticky top-0 left-0 py-3 px-5 sm:px-10 md:px-16 lg:px-24"
      ref={myRef}
    >
      <div className="w-full flex justify-between items-center relative">
        <img 
            src={Images.Logo}
            alt="logo"
          />
          {width > MOBILE_SIZE ? (
            <div className="flex items-center">
              <img 
                src={Images.SearchIcon}
                alt="search icon"
              />
              <h2 className="mx-5">Sign in</h2>
              <Button />
            </div>
          ) : isOpen ? (
            <div className="border bg-white absolute -top-2 -right-3 p-4">
              <img 
                src={Images.Close}
                alt="close"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 scale-150 cursor-pointer"
              />
              <div className="flex flex-col items-center p-3">
                <div className="flex cursor-pointer">
                  <img 
                    src={Images.SearchIcon}
                    alt="search icon"
                  />
                  <h2 className="ml-3">Search</h2>
                </div>
                <h2 className="mx-5 my-5 cursor-pointer pb-3 border-b">Sign in</h2>
                <Button />
              </div>
            </div>
          ) : (
            <img 
              src={Images.HamburgerMenu}
              alt="hamburger menu"
              onClick={() => setIsOpen(true)}
            />
          )}
      </div>
    </div>
  )
}