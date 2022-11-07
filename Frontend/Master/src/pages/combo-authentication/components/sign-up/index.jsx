import React from 'react'
import NeuActionButton from '../../../../common/ui/button/NeuActionButton'
import NeuSocialIconUpButton from '../../../../common/ui/button/NeuSocialIconUpButton'
import NeuRoundedUpContainer from '../../../../common/ui/container/NeuRoundedUpContainer'
import NeuCheckBox from '../../../../common/ui/input/NeuCheckBox'
import NeuRoundedDownInput from '../../../../common/ui/input/NeuRoundedDownInput'
import NeuHorizontalLineUp from '../../../../common/ui/line/NeuHorizontalLineUp'
import NeuRangeSelect from '../../../../common/ui/select/NeuRangeSelect'
import NeuTextUp from '../../../../common/ui/text/NeuTextUp'
import age_range from '../../../../data/age_range'
import income_range from '../../../../data/income_range'
import NeuGenderSelect from './components/NeuGenderSelect'
import './style.css'

export default function SignUp({}) {
  return (
    <div className='flex flex-col items-center'>
      <div className="sign_in_profile_image__root mt-16">
        <label htmlFor="profile_pic">
          <div style={{backgroundImage: 'url(/assets/images/drag_drop_image.png)'}} className="bg-white cursor-pointer w-full h-full bg-no-repeat bg-cover bg-center"/>
        </label>
        <input className='hidden' type="file" name="" id="profile_pic" accept='image/*' />
      </div>
      <h1 className='profile_page__title uppercase mt-10'>SIGNUP</h1>

      <form action="" className='w-full mt-10 px-0'>
        <NeuRoundedDownInput placeholder='First name'/>
        <NeuRoundedDownInput className='mt-5' placeholder='Lastname'/>
        <NeuRoundedDownInput className='mt-5' placeholder='Email' type='email'/>
        <NeuRoundedDownInput className='mt-5' placeholder='Username'/>
        <NeuRoundedDownInput className='mt-5' placeholder='Password' type='password'/>

        <div className="">
          <p className='text-center neu_range_select__title mt-5 mb-3'>Select Your Age Range</p>
          <NeuRangeSelect data={age_range}/>
        </div>

        <NeuRoundedDownInput className='mt-5' placeholder='Country'/>
        
        <div className="px-12">
          <NeuRoundedUpContainer>
            <p className='neu_gender_select__title text-center my-5'>What is Your Gender?</p>
          </NeuRoundedUpContainer>
          <div className="flex justify-center">
            <NeuGenderSelect/>
          </div>
        </div>

        <div className="mx-28">
          <p className='text-left neu_range_select__title mt-5 mb-3'>Yearly Income Range in US Currency</p>
          <NeuRangeSelect data={income_range}/>
        </div>


        <NeuCheckBox label='I still agree to the terms of use of this website' className='mt-5' checked/>
        <NeuCheckBox label='Remember me' className='mt-[10px]' checked/>


        <div className="flex justify-center">
          <NeuActionButton successText='account created' className='mt-5'>create account</NeuActionButton>
        </div>

      </form>

      <div className='flex flex-col items-center mt-16'>
        <p className='sign_in__dont_have_account'>Don't have an account?</p>
        <NeuActionButton successText='Success' className='mt-5'>Sign in</NeuActionButton>
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
