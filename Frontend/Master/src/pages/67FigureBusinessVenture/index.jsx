import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { closeLeftMenu, closeRightMenu, switchLeftMenu } from '../../features/collapse.slice'
import Layout from '../../layout'
import FigureBusinessVenture from './components/FigureBusinessVenture'
import './style.css'

export default function SixSevenFigureBusinessVenture() {

  const [searchParams, setSearchParams] = useSearchParams()

  const dispatch = useDispatch()
  const menu = searchParams.get('menu') || 'not found'

  useEffect(() => {
    dispatch(closeLeftMenu())
    dispatch(closeRightMenu())
  }, [])

  return (
    <Layout>
      <div className="px-8">
        <div className="six_seven_figure_business_venture__card_container">
          <div className="w-full p-8 flex justify-between">
            {menu == 'beauty_|_niche' && (<FigureBusinessVenture title={menu.split('_').join(' ').split('|').join('')}/>)}
            {menu == 'fashion_|_niche' && (<FigureBusinessVenture title={menu.split('_').join(' ').split('|').join('')}/>)}
            {menu == 'beauty_|_niche' && (<FigureBusinessVenture title={menu.split('_').join(' ').split('|').join('')}/>)}
            {menu == 'home_decor_|_niche' && (<FigureBusinessVenture title={menu.split('_').join(' ').split('|').join('')}/>)}
            {menu == 'coaching_|_niche' && (<FigureBusinessVenture title={menu.split('_').join(' ').split('|').join('')}/>)}
            {menu == 'nutration_|_niche' && (<FigureBusinessVenture title={menu.split('_').join(' ').split('|').join('')}/>)}
            {menu == 'fitness_|_niche' && (<FigureBusinessVenture title={menu.split('_').join(' ').split('|').join('')}/>)}
            {menu == 'travel_|_niche' && (<FigureBusinessVenture title={menu.split('_').join(' ').split('|').join('')}/>)}
            {menu == 'event_planning_|_niche' && (<FigureBusinessVenture title={menu.split('_').join(' ').split('|').join('')}/>)}
            {menu == 'spirituality_|_niche' && (<FigureBusinessVenture title={menu.split('_').join(' ').split('|').join('')}/>)}
            {menu == 'finance_|_niche' && (<FigureBusinessVenture title={menu.split('_').join(' ').split('|').join('')}/>)}
            {menu == 'parenting_|_niche' && (<FigureBusinessVenture title={menu.split('_').join(' ').split('|').join('')}/>)}
            {menu == 'animal_lover_|_niche' && (<FigureBusinessVenture title={menu.split('_').join(' ').split('|').join('')}/>)}            
          </div>
        </div>
      </div>
    </Layout>
  )
}
