import React, { useState } from 'react'
import './style.css'

export default function NeuRangeSelect({data}) {

  const [selectedRange, setSelectedRange] = useState(data[Math.floor(data.length/2)])

  const handleSelect = (range) => {
    setSelectedRange(range)
  }

  return (
    <div className='flex justify-between relative'>
      <div className="neu_range_select__bg absolute w-full"/>
      
      {data.map((item, index) =>(
        <div onClick={() => handleSelect(item)} className="flex flex-col items-center z-10 cursor-pointer">
          <div className={`neu_range_select__bar_container flex justify-between p-[4px] w-[111px] ${selectedRange.start != item.start && 'opacity-0'} transition-all duration-100`}>
            <div className="circle"/>
            <div className="circle"/>
          </div>
          <div className="">
            <img src="/assets/images/scale_part.png" alt="" />
            <div className="flex justify-between">
              <p className='neu_range_select__number'>{item.start}</p>
              <p className='neu_range_select__number'>{item.end}</p>
            </div>
          </div>
        </div>
      ))}
     

    </div>
  )
}
