import React from 'react'
import './style.css'

export default function NeuRoundedUpContainer({className, children}) {
  return (
    <div className={`neu_rounded_up_container__root ${className}`}>
      {children}
    </div>
  )
}
