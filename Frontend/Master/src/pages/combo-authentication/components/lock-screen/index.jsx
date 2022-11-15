import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NeuActionButton from '../../../../common/ui/button/NeuActionButton'
import NeuSocialIconUpButton from '../../../../common/ui/button/NeuSocialIconUpButton'
import NeuCheckBox from '../../../../common/ui/input/NeuCheckBox'
import NeuRoundedDownInput from '../../../../common/ui/input/NeuRoundedDownInput'
import NeuHorizontalLineUp from '../../../../common/ui/line/NeuHorizontalLineUp'
import NeuTextUp from '../../../../common/ui/text/NeuTextUp'
import { unlockScreen } from '../../../../features/settings.slice'
import './style.css'

export default function LockScreen({}) {

  const isLocked = useSelector((state) => state.settings.value.isLocked)
  console.log({isLocked})
  const dispatch = useDispatch()

  
  useEffect(() => {
    console.log("hi")
    console.log({isLocked})
  }, [isLocked])
  return (
    <div className='flex flex-col items-center'>      
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
