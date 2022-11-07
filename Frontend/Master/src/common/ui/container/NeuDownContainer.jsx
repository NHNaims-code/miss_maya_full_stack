import React from 'react'
import './style.css'

export default function NeuDownContainer({children, className, ...props}) {
  return (
    <div className={`neu_down__container ${className}`} {...props}>
      {children}
    </div>
  )
}
