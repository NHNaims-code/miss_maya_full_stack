import React from 'react'
import NeuActionButton from '../../../../../common/ui/button/NeuActionButton'
import NeuUpContainer from '../../../../../common/ui/container/NeuUpContainer'
import NeuRoundedDownInput from '../../../../../common/ui/input/NeuRoundedDownInput'
import './styles.css'
import { HiCheckCircle } from "react-icons/hi";
import NeuOTPInput from '../../../../../common/ui/input/NeuOTPInput'

export default function SMS() {
  return (
    <div className='reset_email__root mt-10 p-[30px]'>
      <p className='text-center'>A code will be sent to your Phone</p>
      <NeuRoundedDownInput type='email' placeholder='Enter your phone number' className='mt-5'/>
      <div className="mt-5 flex justify-center">
        <NeuActionButton successText='Request Code'>Request Code</NeuActionButton>
      </div>

      <div className="flex justify-between mt-10">
        <div className='text-[14px]'>A code has been sent to your phone</div>
        <div className='text-[12px] font-semibold'>resend code</div>
      </div>
      <div className="flex justify-center mt-5">
        <NeuUpContainer>
          <div className="flex flex-col items-center">
            <img src="/assets/images/SMS_OTP.png" alt="" />
            <p className='text-[12px]'>Enter 6 Digit Security code</p>
            <NeuOTPInput placeholder="******" className="mt-4"/>
          </div>
          <div className="flex flex-col items-center mt-10">
            <HiCheckCircle size={34} color="#77CB43"/>
            <small className='text-[12px]'>Phone number verified</small>
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
