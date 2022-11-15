import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Slider from 'react-slick'
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
import { closeAllMenu, closeLeftMenu } from '../../features/collapse.slice'
import { switchLightTheme } from '../../features/theme.slice'
import Layout from '../../layout'
import LockScreen from './components/lock-screen'
import Reset from './components/reset'
import SignIn from './components/sign-in'
import SignUp from './components/sign-up'
import './style.css'

export default function ComboAuthentication() {

  const [selectedMenu, setSelectedMenu] = useState('login')
  const [searchParams, setSearchParams] = useSearchParams()

  const dispatch = useDispatch()
  const active = searchParams.get('active')

  useEffect(() => {
    dispatch(switchLightTheme())
    dispatch(closeAllMenu())
  }, [active])


  const data = [
    { icon: 'power', text: 'Login', action: '/auth?active=Login', active: 'Login', query: 'active'},
    { icon: 'power', text: 'Signup', action: '/auth?active=Signup', active: 'Signup', query: 'active' },
    { icon: 'reset', text: 'Reset', action: '/auth?active=Reset&tab=Email', active: 'Reset', query: 'active' },
    { icon: 'lock', text: 'Lock Screen', action: '/auth?active=Lock_Screen', active: 'Lock_Screen', query: 'active' },
  ]

  const settings = {
    autoplay: true,

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }


  return (
    <Layout>
      <div className='combo_authentication__root m-10'>
        <div className="grid grid-cols-10">
          <div className="col-span-4">
            <Slider autoplay {...settings}>                            
              <div className="bg-blue-500 h-screen">
                <div  style={{backgroundImage: 'url(https://img.freepik.com/free-vector/neumorphism-style-white-background-with-ripple-circle-style_1017-39042.jpg?w=2000)'}} className="h-screen">
                          
                </div>
              </div>
              <div className="bg-blue-500 h-screen">
                <div  style={{backgroundImage: 'url(https://images.unsplash.com/photo-1615022702095-ff2c036f3360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)'}} className="h-screen">
                          
                </div>
              </div>
              <div className="bg-blue-500 h-screen">
                <div  style={{backgroundImage: 'url(https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}} className="h-screen">
                          
                </div>
              </div>
              <div className="bg-blue-500 h-screen">
                <iframe className='h-screen w-full'
                  src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
              </div>
            </Slider>
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
                  <NeuSliderSelect onChange={(menu) => setSelectedMenu(menu.text)} data={data} active={selectedMenu}/>
                </div>

                {/* Component */}
                {active == 'Login' && ( <SignIn/> )}
                {active == 'Signup' && ( <SignUp/> )}
                {active == 'Reset' && ( <Reset/> )}
                {active == 'Lock_Screen' && ( <LockScreen/> )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
