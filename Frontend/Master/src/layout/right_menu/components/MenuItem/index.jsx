import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import NeuDownContainer from '../../../../common/ui/container/NeuDownContainer'
import NeuUpContainer from '../../../../common/ui/container/NeuUpContainer'
import { switchLeftMenu, switchRightMenu } from '../../../../features/collapse.slice'
import './style.css'

export default function MenuItem({menu, collasped = false}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const dispatch = useDispatch()
  return (
    <div className='flex items-start space-x-10 cursor-pointer max-w-[380px]'>      
      {
        collasped && <div className="flex-grow ">
        <NeuUpContainer onClick={() => setIsMenuOpen(!isMenuOpen)} style={{display: 'block', padding: `${menu.large && '0px'}`}}>
          <div className={`flex items-center p-3 ${menu.large && ' py-12 border-2 rounded-[10px] border-yellow-200'}`}>
            <img className='mr-4' src={menu.icon} width={24} height={24} alt="" />
            <p className='text-golden-bold'>{menu.title}</p>
          </div>
        </NeuUpContainer>
        {
          isMenuOpen && <div className="mb-5 bg__golden p-1 mt-5 rounded-lg">
            <div className="left_menu__expand_root rounded-lg">
              <NeuDownContainer style={{display: 'block'}}>
                <div className="p-4">
                {
                  menu.subMenu.map((me , index)  => (
                    <Link to={`/${menu.title.split(' ').join('_').split('-').join('_').toLowerCase()}?menu=${me.title.split(' ').join('_').split('-').join('_').toLowerCase()}`}>
                      <NeuUpContainer style={{display: 'block'}} className='mt-5'>
                        <div className="flex items-center p-3">
                          <img className='mr-4' src={me.icon} alt="" />
                          <p className='text-golden-bold'>{me.title}</p>
                        </div>
                      </NeuUpContainer>
                    </Link>
                  ))
                }
                </div>
              </NeuDownContainer>
            </div>
          </div>
        }        
      </div>
      }
      <NeuUpContainer>
        <div onClick={() => dispatch(switchRightMenu())} className="h-[42px] w-[42px] flex justify-center items-center">
          <img src={menu.icon} width={24} height={24} alt="" />
        </div>
      </NeuUpContainer>
    </div>
  )
}
