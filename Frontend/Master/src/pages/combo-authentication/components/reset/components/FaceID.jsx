import React from 'react'
import NeuActionButton from '../../../../../common/ui/button/NeuActionButton'
import NeuUpContainer from '../../../../../common/ui/container/NeuUpContainer'
import NeuRoundedDownInput from '../../../../../common/ui/input/NeuRoundedDownInput'
import './styles.css'
import { HiCheckCircle } from "react-icons/hi";
import NeuOTPInput from '../../../../../common/ui/input/NeuOTPInput'

export default function FaceID() {
  return (
    <div className='reset_email__root mt-10 p-[30px]'>
      <div className="flex justify-center mt-5">
        <NeuUpContainer className={'w-[255px]'}>
          <div className="flex flex-col items-center my-[30px]">
            <img src="/assets/images/FACE_OTP.png" alt="" />           
          </div>
          <div className="flex flex-col items-center pb-5">
            <HiCheckCircle size={34} color="#77CB43"/>
            <small className='text-[12px]'>Face ID verified</small>
          </div>
        </NeuUpContainer>
      </div>
      <div className="">
        <NeuRoundedDownInput className='mt-10' type="password" placeholder="Enter new password"/>
      </div>
      <div className="mt-5 flex justify-center">
        <NeuActionButton className='mt-3' successText='Password Changed'>Change Password</NeuActionButton>
      </div>
    </div>
  )
}
