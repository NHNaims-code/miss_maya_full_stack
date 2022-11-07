import React from 'react'
import { useSelector } from 'react-redux'
import NeuDownContainer from '../../common/ui/container/NeuDownContainer'
import left_menu from '../../data/left_menu'
import MenuItem from './components/MenuItem'
import './style.css'

export default function LeftMenu() {

  const collapse = useSelector((state) => state.collapse.value)

  return (
    <NeuDownContainer className="mt-10">
      <div className="p-4 space-y-5">
      {
        left_menu.map((menu, index) => (
          <MenuItem menu={menu} collasped={collapse.openLeftMenu}/>
        ))
      }
      </div>
    </NeuDownContainer>
  )
}
