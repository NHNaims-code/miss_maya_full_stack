import React from 'react'
import './style.css'

export default function NeuHorizontalLine({className, ...params}) {
  return (
    <div className={`neu_horizontal__line ${className}`} {...params}></div>
  )
}
