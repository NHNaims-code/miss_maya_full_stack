import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import NeuDownContainer from '../../../../common/ui/container/NeuDownContainer'
import NeuUpContainer from '../../../../common/ui/container/NeuUpContainer'
import { openLeftMenu, switchLeftMenu } from '../../../../features/collapse.slice'
import './style.css'

export default function MenuItem({menu, collasped = false}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const dispatch = useDispatch()

  return (
    <div className='flex items-start space-x-10 cursor-pointer max-w-[380px]'>
      <div className={`${menu.large && 'mt-12'}`}>
        <NeuUpContainer style={{border: `${menu.large && '1px solid #ffe082'}`}}>
          <div onClick={() => dispatch(switchLeftMenu())} className={`h-[42px] w-[42px] flex justify-center items-center`}>
            <img src={menu.icon} width={24} height={24} alt="" />
          </div>
        </NeuUpContainer>
      </div>
      {
        collasped && <div className="flex-grow ">
        <NeuUpContainer onClick={() => setIsMenuOpen(!isMenuOpen)} style={{display: 'block', padding: `${menu.large && '0px'}`}}>
          { !menu.stage ? (
            <div className={`flex items-center p-3 ${menu.large && 'py-14 my-5 border mb-5 rounded-[10px] border-amber-200'}`}>
              <img className='mr-4' src={menu.icon} width={24} height={24} alt="" />
              <p className='text-golden-bold'>{menu.title}</p>
            </div> ) : (
              <div className={`flex flex-col items-center p-3 ${menu.large && 'py-10 my-5 border mb-5 rounded-[10px] border-amber-200'}`}>
                <h2 className='text-golden-bold font-bold mb-4 text-[17px] text-center'>STAGE {menu.stage}</h2>
                <div className={`flex items-center`}>
                  <img className='mr-4' src={menu.icon} width={24} height={24} alt="" />
                  <p className='text-golden-bold font-bold'>{menu.title}</p>
                </div>
              </div>
            )}
        </NeuUpContainer>
        {
          isMenuOpen && <div className="mb-5 bg__golden p-1 mt-5 rounded-lg">
            <div className="left_menu__expand_root rounded-lg">
              <NeuDownContainer style={{display: 'block'}}>
                <div className="px-4 pb-2">
                {
                  menu.subMenu.map((me , index)  => (
                    <NeuUpContainer style={{display: 'block'}} className='mt-5'>
                      <div className="flex items-center p-3">
                        <img className='mr-4' src={me.icon} alt="" />
                        <p className='text-golden-bold'>{me.title}</p>
                      </div>
                    </NeuUpContainer>
                  ))
                }
                </div>
              </NeuDownContainer>
            </div>
          </div>
        }        
      </div>
      }
    </div>
  )
}
