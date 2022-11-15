import React from 'react'

export default function NeuOTPInput({...props}) {
  return (
    <div className='neu_otp_input__root'>
      <input type="text" {...props}/>
    </div>
  )
}
