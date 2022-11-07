import React, { useState } from 'react'
import './style.css'

export default function NeuActionButton({successText='Success', children='Demo', className, ...props}) {

  const [isSuccess, setIsSuccess] = useState(false)

  return (
    <button className={`relative mb-7 ${className}`} {...props}>
      <div className="neu_action_button__root">
        <p>{successText}</p>
      </div>
      <div onClick={() => setIsSuccess(true)} className={`neu_action_button__popup absolute w-full top-0 left-0 rotate-[10deg] origin-bottom-left ${isSuccess && 'top-[300px] opacity-0'} transition-all duration-500`}>
        <p>{children}</p>
      </div>
    </button>
  )
}
