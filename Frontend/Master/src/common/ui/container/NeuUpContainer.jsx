import React from 'react'
import './style.css'

export default function NeuUpContainer({children, className, ...props}) {
  return (
    <div className={`neu_up__container ${ className }`} {...props}>
      {children}
    </div>
  )
}
