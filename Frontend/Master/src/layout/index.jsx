import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NeuActionButton from '../common/ui/button/NeuActionButton'
import { unlockScreen } from '../features/settings.slice'
import Header from './header'
import Hero from './hero'
import LeftMenu from './left_menu'
import RightMenu from './right_menu'
import './style.css'

export default function Layout({children}) {

  const isLocked = useSelector((state) => state.settings.value.isLocked)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUnlock = () => {
    setTimeout(() => {
      dispatch(unlockScreen())
      navigate('/auth?active=Lock_Screen')
    }, 100);
  }

  return (
    <div>
      {
        isLocked && (
          <div className="transition-all duration-1000 lock_screen__popup fixed w-screen overflow-hidden h-screen z-50 top-0 left-0 flex justify-center items-center">
            <img className='full' src="/assets/images/lock_screen_image.svg" alt="" />
            <div className="absolute top-[280px]">
              <NeuActionButton onClick={handleUnlock} successText='UNLOCK' className='mt-3'>UNLOCK</NeuActionButton>
            </div>
          </div>
        )
      }
      <div className="fixed w-full header__fixed z-30">
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
