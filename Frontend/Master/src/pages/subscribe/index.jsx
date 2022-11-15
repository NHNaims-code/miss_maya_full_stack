import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NeuActionButton from '../../common/ui/button/NeuActionButton'
import NeuSocialIconUpButton from '../../common/ui/button/NeuSocialIconUpButton'
import NeuSliderSelect from '../../common/ui/select/NeuSliderSelect'
import { switchLightTheme } from '../../features/theme.slice'
import './style.css'

export default function Subscribe() {
  const data = [
    { icon: null, text: 'Beauty' },
    { icon: null, text: 'Nutrition' },
    { icon: null, text: 'Fitness' },
    { icon: null, text: 'Home Decor' },
    { icon: null, text: 'Travel' },
    { icon: null, text: 'Spiritualty' },
    { icon: null, text: 'Coaching' },
    { icon: null, text: 'Event Planning' },
    { icon: null, text: 'Finance' },
  ]

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(switchLightTheme())
  }, [])

  
  return (
    <div className='min-h-screen bg-[#EFF4F8] py-20'>
        <div className="container mx-auto">
          <h1 className='subscription_center__title text-center'>SUBSCRIPTION CENTER</h1>
          <div className="relative flex justify-center mt-10">
            <img src="/assets/images/subscription_card.png" alt="" />
            <div className=" absolute mx-auto bottom-12">
              <p className='subscribe__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque reprehenderit quisquam ad aperiam </p>
              <input type="email" name="" placeholder='Enter your email' className='subscribe__email mt-5' />
            </div>
          </div>
          <div className="pt-10">
            <NeuSliderSelect data={data}/>
          </div>
          <div className="flex justify-center mt-10">
            <NeuActionButton successText='Subscribe Now'>Subscribe Now</NeuActionButton>
          </div>
        </div>
    </div>
  )
}
