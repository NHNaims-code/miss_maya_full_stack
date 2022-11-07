import React, { useState } from 'react'
import './style.css'
import { FaPowerOff } from "react-icons/fa";
import { BsArrowClockwise, BsPower } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";

export default function NeuGroupActionButton({small=false, icon='power_off', iconActiveColor="#77CB43", iconNormalColor="#4E4E57", isActive=false, children}) {


  return (
    <button>
      <div className="neu_group_action_button__root">        
        <div className={`neu_group_action_button__container flex items-center space-x-2 ${isActive && 'active'}`}>
          {isActive ? (
            <span>
              {icon == 'power' && <BsPower size={small ? 15 : 20} color={iconActiveColor}/>}
              {icon == 'reset' && <BsArrowClockwise size={small ? 15 : 20} color={iconActiveColor}/>}
              {icon == 'lock' && <AiFillLock size={small ? 15 : 20} color={iconActiveColor}/>}
            </span>
          ) : (
            <span>
              {icon == 'power' && <BsPower size={small ? 15 : 20} color={iconNormalColor}/>}
              {icon == 'reset' && <BsArrowClockwise size={small ? 15 : 20} color={iconNormalColor}/>}
              {icon == 'lock' && <AiFillLock size={small ? 15 : 20} color={iconNormalColor}/>}
            </span>
          )}
          <p className='uppercase'>{children}</p>
        </div>
      </div>
    </button>
  )
}
