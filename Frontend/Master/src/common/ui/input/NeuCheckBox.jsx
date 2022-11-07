import React from 'react'
import './style.css'

export default function NeuCheckBox({id=Math.random(), className, label="Demo Checkbox", onChange, ...params}) {
  return (
    <div className={`neu_checkbox__root ${className}`}>
      <input onChange={onChange} type="checkbox" id={id} {...params}/>
      <label htmlFor={id}><span>{label}</span></label>
    </div>
  )
}
