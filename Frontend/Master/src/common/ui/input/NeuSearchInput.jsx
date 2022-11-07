import React from 'react'
import './style.css'
import { RiSearchLine } from "react-icons/ri";

export default function NeuSearchInput({className, ...args}) {
  return (
    <div className={`neu_search__input_root flex justify-between items-center ${className}`}>
      <input className={`neu_search__input w-full focus:outline-none`} type="text" name="" id="" {...args} />
      <RiSearchLine size={28} className="mr-12"/>
    </div>
  )
}
