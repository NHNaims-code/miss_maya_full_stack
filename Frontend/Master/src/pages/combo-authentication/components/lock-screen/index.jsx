import React, { useState } from 'react'
import NeuActionButton from '../../../../common/ui/button/NeuActionButton'
import NeuSocialIconUpButton from '../../../../common/ui/button/NeuSocialIconUpButton'
import NeuCheckBox from '../../../../common/ui/input/NeuCheckBox'
import NeuRoundedDownInput from '../../../../common/ui/input/NeuRoundedDownInput'
import NeuHorizontalLineUp from '../../../../common/ui/line/NeuHorizontalLineUp'
import NeuTextUp from '../../../../common/ui/text/NeuTextUp'
import './style.css'

export default function LockScreen({}) {

  const [isLocked, setIsLocked] = useState(true)

  const handleUnlock = () => {
    setTimeout(() => {
      setIsLocked(false)
    }, 100);
  }
  return (
    <div className='flex flex-col items-center'>
      {
        isLocked && (
          <div className="lock_screen__popup absolute w-screen overflow-hidden h-screen z-50 top-0 left-0 flex justify-center items-center">
            <img className='full' src="/assets/images/lock_screen_image.svg" alt="" />
            <div className="absolute top-[280px]">
              <NeuActionButton onClick={handleUnlock} successText='UNLOCK' className='mt-3'>UNLOCK</NeuActionButton>
            </div>
          </div>
        )
      }
      <div className="sign_in_profile_image__root mt-16">
        <div style={{backgroundImage: 'url(/assets/brand/maya.jpg)'}} className="bg-white w-full h-full bg-no-repeat bg-cover bg-center"/>
      </div>
      <h1 className='profile_page__title uppercase mt-10'>Lock Screen</h1>

      <form action="" className='w-full mt-10 px-10'>
        <NeuRoundedDownInput placeholder='Password' type="password"/>

        <div className="flex justify-center">
          <NeuActionButton successText='UNLOCK' className='mt-10'>UNLOCK</NeuActionButton>
        </div>

      </form>
    </div>
  )
}
