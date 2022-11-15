import React from 'react'
import './style.css'

export default function NeuUpContainer({children, className, onClick=() => {}, ...props}) {
  return (
    <div className={`neu_up__container ${ className }`} onClick={onClick} {...props}>
      {children}
    </div>
  )
}
