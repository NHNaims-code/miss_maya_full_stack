import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NeuUpContainer from '../../common/ui/container/NeuUpContainer'
import { switchLightTheme } from '../../features/theme.slice'
import { TbBrandHipchat } from "react-icons/tb";
import './style.css'
import NeuSocialIconUpButton from '../../common/ui/button/NeuSocialIconUpButton';
import NeuRoundedDownInput from '../../common/ui/input/NeuRoundedDownInput';
import NeuActionButton from '../../common/ui/button/NeuActionButton';
import NeuSliderSelect from '../../common/ui/select/NeuSliderSelect';

export default function ContactCenter() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(switchLightTheme())
  }, [])

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
  return (
    <div className='contact_center__root pb-10'>
      <div className="container mx-auto">
        <h1 className='text-center pt-10'>CONTACT CENTRE</h1>
        <div className="grid grid-cols-10 mt-12 gap-20">
          <div className="col-span-5 flex flex-col justify-end">
            <div className="contact_center__left p-5 relative">
                <div className="p-10">
                  <div className="contact_center__profile_root absolute left-0 right-0 mx-auto">
                    <div className="image_container overflow-hidden">
                      <div style={{backgroundImage: 'url(/assets/brand/maya.jpg)'}} className="h-full w-full bg-no-repeat bg-center bg-cover"></div>
                    </div>
                  </div>
                  <div className="contact_center__content py-[1px] mt-20 rounded-[20px]">
                    <div className="bg-[#EFF4F8] rounded-[20px] m-[5px] p-10 pt-28">
                      <h1 className='text-center'>Hi, I am Diana</h1>
                      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem aperiam, nisi eaque ea hic quae reprehenderit.</p>
                      <div className="flex justify-around mt-2">
                        <div className="flex flex-col items-center contact_center__icon_section">
                          <div className="contact_center__icon">        
                            <TbBrandHipchat size={18}/>
                          </div>
                          <p className='w-[130px] text-center mt-[10px]'> libero velitinterdum aliquet odio mattis</p>
                        </div>
                        <div className="flex flex-col items-center contact_center__icon_section">
                          <div className="contact_center__icon">        
                            <TbBrandHipchat size={18}/>
                          </div>
                          <p className='w-[130px] text-center mt-[10px]'> libero velitinterdum aliquet odio mattis</p>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="space-x-[15px] mt-10">
                          <NeuSocialIconUpButton icon='facebook'/>
                          <NeuSocialIconUpButton icon='instagram'/>
                          <NeuSocialIconUpButton icon='twitter'/>
                          <NeuSocialIconUpButton icon='linkedIn'/>
                          <NeuSocialIconUpButton icon='dribbble'/>
                          <NeuSocialIconUpButton icon='pinterest'/>
                          <NeuSocialIconUpButton icon='youtube'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="col-span-5 relative flex justify-center">
            <img src="/assets/images/envelop_open.png" alt="" className=' top-0 mx-auto' />
            <img src="/assets/images/7_figure_lifestyle.png" alt="" className='absolute bottom-36 mx-auto' />
            <div className="z-30 space-y-5 w-[350px] mt-10 absolute">
              <NeuRoundedDownInput placeholder="Name"/>
              <NeuRoundedDownInput placeholder="Email"/>
              <NeuRoundedDownInput placeholder="Contact"/>
              <NeuRoundedDownInput placeholder="What are you thinking?" type={'textarea'} rows={5}/>
              <NeuActionButton successText='Success'>Submit</NeuActionButton>
            </div>
            {/* <NeuRoundedDownInput/> */}
          </div>
        </div>


        <div className="mt-20">
          <NeuSliderSelect data={data}/>
        </div>
      </div>
    </div>
  )
}
