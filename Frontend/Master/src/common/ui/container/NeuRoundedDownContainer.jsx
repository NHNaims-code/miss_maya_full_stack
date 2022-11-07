import React from 'react'
import './style.css'

export default function NeuRoundedDownContainer({className, children}) {
  return (
    <div className={`new_rounded_down_container__root ${className}`}>
      {children}
    </div>
  )
}
