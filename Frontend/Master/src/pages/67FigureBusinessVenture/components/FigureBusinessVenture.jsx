import React from 'react'
import NeuActionButton from '../../../common/ui/button/NeuActionButton'
import NeuDownContainer from '../../../common/ui/container/NeuDownContainer'
import NeuUpContainer from '../../../common/ui/container/NeuUpContainer'
import './style.css'

export default function FigureBusinessVenture({bgColor='#FFBFCA', title}) {
  return (
    <div className='relative flex flex-col items-center w-full figure_business_venture__root'>
      <NeuDownContainer className={`w-full mt-2`}>
        <h1 className='text-[60px] text-center py-20'>Get It on Tomorrow</h1>
      </NeuDownContainer>
    </div>
  )
}
