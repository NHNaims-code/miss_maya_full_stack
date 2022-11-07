import React, { useState } from 'react'
import NeuActionButton from '../../../../common/ui/button/NeuActionButton'
import NeuSocialIconUpButton from '../../../../common/ui/button/NeuSocialIconUpButton'
import NeuCheckBox from '../../../../common/ui/input/NeuCheckBox'
import NeuRoundedDownInput from '../../../../common/ui/input/NeuRoundedDownInput'
import NeuHorizontalLineUp from '../../../../common/ui/line/NeuHorizontalLineUp'
import NeuSliderSelect from '../../../../common/ui/select/NeuSliderSelect'
import NeuTextUp from '../../../../common/ui/text/NeuTextUp'
import './style.css'

export default function Reset({}) {

  const data = [
    {icon: false, text: 'Email'},
    {icon: false, text: 'SMS'},
    {icon: false, text: 'Fingerprint'},
    {icon: false, text: 'Face ID'},
  ]

  const [selectedMenu, setSelectedMenu] = useState()

  return (
    <div className='flex flex-col items-center'>
      <div className="sign_in_profile_image__root mt-16">
        <div style={{backgroundImage: 'url(/assets/brand/maya.jpg)'}} className="bg-white w-full h-full bg-no-repeat bg-cover bg-center"/>
      </div>
      <h1 className='profile_page__title uppercase mt-10'>RESET PASSWORD</h1>

      <div className="w-full">
        <p className='rest__slider_title mt-10 mb-5'>Verification Via</p>
        <NeuSliderSelect onChange={(menu) => setSelectedMenu(menu.text.toLowerCase())} data={data}/>
      </div>

      <form action="" className='w-full mt-10'>
        <NeuRoundedDownInput placeholder='Email / Username'/>
        <NeuRoundedDownInput className='mt-5' placeholder='Password' type="password"/>

        <NeuCheckBox label='I still agree to the terms of use of this website' className='mt-5' checked/>
        <NeuCheckBox label='Remember me' className='mt-[10px]' checked/>

        <div className="flex justify-center">
          <NeuActionButton successText='Success' className='mt-5'>Sign in</NeuActionButton>
        </div>

      </form>

      <div className='flex flex-col items-center mt-16'>
        <p className='sign_in__dont_have_account'>Don't have an account?</p>
        <NeuActionButton successText='Success' className='mt-5'>Sign up</NeuActionButton>
      </div> 
          
      <div className="flex justify-center">
        <div className="flex items-center space-x-[30px]">
          <NeuHorizontalLineUp/>
          <NeuTextUp>OR</NeuTextUp>
          <NeuHorizontalLineUp/>
        </div>
      </div>

      <div className="mt-10 space-x-[15px]">
        <NeuSocialIconUpButton icon='facebook'/>
        <NeuSocialIconUpButton icon='instagram'/>
        <NeuSocialIconUpButton icon='twitter'/>
        <NeuSocialIconUpButton icon='linkedIn'/>
        <NeuSocialIconUpButton icon='dribbble'/>
        <NeuSocialIconUpButton icon='pinterest'/>
        <NeuSocialIconUpButton icon='youtube'/>
      </div>

    </div>
  )
}
