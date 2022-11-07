import React from 'react'
import NeuHorizontalLine from '../../common/ui/line/NeuHorizontalLineDown'
import Profile from './components/profile'
import HeroSlider from './components/slider'
import './style.css'

export default function Hero() {
  return (
    <div className='flex justify-between'>
      <div className="flex flex-col items-center">
        <NeuHorizontalLine className="mt-7"/>
        <Profile name='Miss Maya'/>
      </div>
      <div className="flex-grow">
        <HeroSlider/>
      </div>
      <div className="flex flex-col items-center">
        <NeuHorizontalLine className="mt-7"/>
        <Profile name='Miss Maya'/>
      </div>
    </div>
  )
}
