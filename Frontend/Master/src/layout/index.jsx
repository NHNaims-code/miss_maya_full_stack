import React from 'react'
import Header from './header'
import Hero from './hero'
import LeftMenu from './left_menu'
import RightMenu from './right_menu'
import './style.css'

export default function Layout({children}) {
  return (
    <div>
      <div className="fixed w-full header__fixed">
        <Header/>
        <div className="">
          <Hero/>
        </div>
      </div>
      <div className="flex pt-[320px]">
        <div className="">
          <LeftMenu/>
        </div>
        <div className="flex-grow">
          { children }
        </div>
        <div className="">
          <RightMenu/>
        </div>
      </div>
    </div>
  )
}
