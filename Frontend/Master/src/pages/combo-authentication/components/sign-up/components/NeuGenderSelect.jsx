import React, { useState } from 'react'
import './style.css'
import { BsGenderMale, BsGenderFemale, BsGenderTrans, BsHexagon } from "react-icons/bs";

export default function NeuGenderSelect() {

  const [selectedGender, setSelectedGender] = useState('male')

  return (
    <div className='flex items-center'>

      <div onClick={() => setSelectedGender('male')} className='inline-block cursor-pointer'>
        <div className="neu_gender_select_item__root">
          <div className={`neu_gender_select_item__container ${selectedGender == 'male' && 'active'}`}>
            <BsGenderMale size={20} color={selectedGender == 'male' ? '#fff' : '#A1A3AC'}/>
          </div>
        </div>
        <p className={`neu_gender_select_item__text ${selectedGender == 'male' && 'active'}`}>Male</p>
      </div>
      
      <div onClick={() => setSelectedGender('female')} className='inline-block cursor-pointer ml-[35px]'>
        <div className="neu_gender_select_item__root">
          <div className={`neu_gender_select_item__container ${selectedGender == 'female' && 'active'}`}>
            <BsGenderFemale size={20} color={selectedGender == 'female' ? '#fff' : '#A1A3AC'}/>
          </div>
        </div>
        <p className={`neu_gender_select_item__text ${selectedGender == 'female' && 'active'}`}>Female</p>
      </div>
      
      <div onClick={() => setSelectedGender('non_binary')} className='inline-block cursor-pointer ml-[35px]'>
        <div className="neu_gender_select_item__root">
          <div className={`neu_gender_select_item__container ${selectedGender == 'non_binary' && 'active'}`}>
            <BsGenderTrans size={20} color={selectedGender == 'non_binary' ? '#fff' : '#A1A3AC'}/>
          </div>
        </div>
        <p className={`neu_gender_select_item__text ${selectedGender == 'non_binary' && 'active'}`}>Non-Binary</p>
      </div>
      
      <div className="inline-block cursor-pointer">
        <div onClick={() => setSelectedGender('non_conforming')} className='ml-[24px] flex flex-col items-center'>
          <div className="neu_gender_select_item__root">
            <div className={`neu_gender_select_item__container ${selectedGender == 'non_conforming' && 'active'}`}>
              <BsHexagon size={20} color={selectedGender == 'non_conforming' ? '#fff' : '#A1A3AC'}/>
            </div>
          </div>
          <p className={`neu_gender_select_item__text mt-[10px] ${selectedGender == 'non_conforming' && 'active'}`}>Non-Conforming</p>
        </div>
      </div>
      
    </div>
  )
}
