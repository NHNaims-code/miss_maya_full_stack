import React, { useEffect, useState } from 'react'
import './style.css'
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function NeuRoundedDownInput({type, className, id, ...props}) {

  const [inputType, setInputType] = useState('text')
  const [isVisible, setIsVisibility] = useState(type=='password' ? true : false)

  useEffect(() => {
    if(isVisible){
      setInputType('text')
    }else{
      setInputType('password')
    }
  }, [isVisible])

  return (
    <div className={`neu_rounded_down_input__root overflow-hidden flex justify-between items-center ${className}`}>
      <input className='w-full bg-transparent py-[18px] px-[15px] focus-within:outline-none' type={inputType} id={id} {...props}/>
      {
        type == 'password' && (
          <div onClick={() => setIsVisibility(!isVisible)} className="px-4 cursor-pointer">
            {isVisible ? (
              <FaEye color='#2B2B2E' size={20}/>
            ) : (
              <FaEyeSlash color='#2B2B2E' size={20}/>
            )}
          </div>
        )
      }
    </div>
  )
}
