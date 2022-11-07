import React, { useState } from 'react'
import NeuGroupActionButton from '../button/NeuGroupActionButton'
import NeuRoundedDownContainer from '../container/NeuRoundedDownContainer'
import './style.css'

export default function NeuSliderSelect({onChange=()=>{}, small=false, data=[]}) {

  const [selectedItem, setSeletedItem] = useState(data[0].text)

  const handleChangeItemSelected = (item) => {
    setSeletedItem(item.text)
    onChange(item)
  }

  return (
    <div className='relative neu_slider_select__root'>
      <div className="">
        <NeuRoundedDownContainer className='absolute w-full h-[40px] -top-[5px]'></NeuRoundedDownContainer>
      </div>
      <div className=" flex justify-between px-4">

        {
          data.map((item, index) => (
            <div onClick={() => handleChangeItemSelected(item)} key={index} className="flex flex-col space-y-5 z-10">
              {
                selectedItem == item.text ? (
                  <div className="neu_slider_select__bar flex justify-between items-center px-[3px] z-10">
                    <div className="circle"/>
                    <img className='mt-4' src="/assets/images/select_slider_cap.svg" height={42} width={35} alt="" />
                    <div className="circle"/>
                  </div>
                ) : (
                  <div className="neu_slider_select__bar transition-all duration-100 opacity-0 flex justify-between items-center px-[3px] z-10">
                    <div className="circle"/>
                    <img className='mt-4' src="/assets/images/select_slider_cap.svg" height={42} width={35} alt="" />
                    <div className="circle"/>
                  </div>
                )
              }
              <div className="">
                {
                  selectedItem == item.text ? (
                    <NeuGroupActionButton small={small} icon={item.icon} isActive={true}>{item.text}</NeuGroupActionButton>
                  ) : (
                    <NeuGroupActionButton small={small} icon={item.icon}>{item.text}</NeuGroupActionButton>
                  )
                }
              </div>
            </div>
          ))
        }


      </div>
    </div>
  )
}
