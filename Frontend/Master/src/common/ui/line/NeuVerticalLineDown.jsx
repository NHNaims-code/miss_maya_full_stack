import React from 'react'
import './style.css'

export default function NeuVerticalLine({className, ...params}) {
  return (
    <div className={`neu_vertical__line ${className}`} {...params}></div>
  )
}
