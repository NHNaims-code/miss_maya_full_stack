import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import NeuActionButton from '../../common/ui/button/NeuActionButton'
import NeuGroupActionButton from '../../common/ui/button/NeuGroupActionButton'
import NeuSocialIconUpButton from '../../common/ui/button/NeuSocialIconUpButton'
import NeuDownContainer from '../../common/ui/container/NeuDownContainer'
import NeuRoundedDownContainer from '../../common/ui/container/NeuRoundedDownContainer'
import NeuCheckBox from '../../common/ui/input/NeuCheckBox'
import NeuRoundedDownInput from '../../common/ui/input/NeuRoundedDownInput'
import NeuHorizontalLineUp from '../../common/ui/line/NeuHorizontalLineUp'
import NeuSliderSelect from '../../common/ui/select/NeuSliderSelect'
import NeuTextUp from '../../common/ui/text/NeuTextUp'
import { switchLightTheme } from '../../features/theme.slice'
import LockScreen from './components/lock-screen'
import Reset from './components/reset'
import SignIn from './components/sign-in'
import SignUp from './components/sign-up'
import './style.css'

export default function ComboAuthentication() {

  const [selectedMenu, setSelectedMenu] = useState('login')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(switchLightTheme())
  }, [])


  const data = [
    { icon: 'power', text: 'Login' },
    { icon: 'power', text: 'Signup' },
    { icon: 'reset', text: 'reset' },
    { icon: 'lock', text: 'Lock Screen' },
  ]
  return (
    <div className='combo_authentication__root'>
      <div className="grid grid-cols-10">
        <div className="col-span-4">
          {/* <NeuActionButton/>
          <NeuGroupActionButton/>
          <NeuRoundedDownContainer/>
          <NeuRoundedDownInput placeholder="Enter your text here......."/>
          <NeuCheckBox/>
          <div className="">
            <NeuSocialIconUpButton icon='facebook'/>
            <NeuSocialIconUpButton icon='instagram'/>
            <NeuSocialIconUpButton icon='twitter'/>
            <NeuSocialIconUpButton icon='linkedIn'/>
            <NeuSocialIconUpButton icon='dribbble'/>
            <NeuSocialIconUpButton icon='pinterest'/>
            <NeuSocialIconUpButton icon='youtube'/>
          </div>
          <NeuHorizontalLineUp/>
          <NeuTextUp>Hello</NeuTextUp> */}
          <div style={{backgroundImage: 'url(https://img.freepik.com/free-vector/neumorphism-style-white-background-with-ripple-circle-style_1017-39042.jpg?w=2000)'}} className="w-full min-h-screen"/>
        </div>

        <div className="col-span-6 flex justify-center">
          <div className=" w-full max-w-[666px]">
            {/* Logout */}
            <div className="flex justify-end items-start h-[17vh] 2xl:h-[12vh] p-5">
              <NeuActionButton successText='Success'>Logout</NeuActionButton>
            </div>

            <div className="h-[83vh] 2xl:h-[87vh] overflow-x-hidden overflow-y-scroll pr-10 pt-2 p-5 box-border mr-5">
              {/* Selector */}
              <div className="">
                <NeuSliderSelect onChange={(menu) => setSelectedMenu(menu.text.toLowerCase())} data={data}/>
              </div>

              {/* Component */}
              {selectedMenu == 'login' && ( <SignIn/> )}
              {selectedMenu == 'signup' && ( <SignUp/> )}
              {selectedMenu == 'reset' && ( <Reset/> )}
              {selectedMenu == 'lock screen' && ( <LockScreen/> )}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
