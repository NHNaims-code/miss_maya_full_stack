import React from 'react'
import './style.css'

export default function NeuTextUp({className, children, ...props}) {
  return (
    <div className={`neu_text_up__root ${className}`} {...props}>
      {children}
    </div>
  )
}
