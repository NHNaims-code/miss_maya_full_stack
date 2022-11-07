import React from 'react'
import { Link } from 'react-router-dom'
import NeuVerticalLine from '../../common/ui/line/NeuVerticalLineDown'
import './style.css'
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill, RiTwitterFill, RiLinkedinFill, RiDribbbleFill, RiPinterestLine, RiYoutubeFill } from "react-icons/ri";
import { HiOutlineMoon, HiSun } from "react-icons/hi";
import NeuUpContainer from '../../common/ui/container/NeuUpContainer';
import NeuSearchInput from '../../common/ui/input/NeuSearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { switchDarkTheme, switchLightTheme } from '../../features/theme.slice';
import { switchLeftMenu, switchRightMenu } from '../../features/collapse.slice';

export default function Header() {

  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  const handleSwitchTheme = () => {
    if(theme.activeTheme == 'dark'){
      dispatch(switchLightTheme())
    }
    if(theme.activeTheme == 'light'){
      dispatch(switchDarkTheme())
    }
  }

  
  return (
    <div className='header__root flex items-center'>
      <div className="flex items-center">
        <img onClick={() => dispatch(switchLeftMenu())} className='mr-6 cursor-pointer' src="/assets/images/icon_menu.png" alt="Menu" />
        <NeuVerticalLine/>
        { theme.activeTheme == 'light' && (<img className='ml-10' src="/assets/brand/logo_light.png" alt="Logo" />)}
        { theme.activeTheme == 'dark' && (<img className='ml-10' src="/assets/brand/logo_dark.png" alt="Logo" />)}
      </div>

      <div className="mx-5 2xl:mx-16 flex-grow flex items-center space-x-10">
        <ul className='flex space-x-5'>
          <li>
            <Link to={'#'}><NeuUpContainer className='rounded-full'><FaFacebookF size={18}/></NeuUpContainer></Link>
          </li>
          <li>
            <Link to={'#'}><NeuUpContainer className='rounded-full'><RiInstagramFill size={18}/></NeuUpContainer></Link>
          </li>
          <li className='hidden 2xl:block'>
            <Link to={'#'}><NeuUpContainer className='rounded-full'><RiTwitterFill size={18}/></NeuUpContainer></Link>
          </li>
          <li className='hidden 2xl:block'>
            <Link to={'#'}><NeuUpContainer className='rounded-full'><RiLinkedinFill size={18}/></NeuUpContainer></Link>
          </li>
          <li className='hidden 2xl:block'>
            <Link to={'#'}><NeuUpContainer className='rounded-full'><RiDribbbleFill size={18}/></NeuUpContainer></Link>
          </li>
          <li>
            <Link to={'#'}><NeuUpContainer className='rounded-full'><RiPinterestLine size={18}/></NeuUpContainer></Link>
          </li>
          <li>
            <Link to={'#'}><NeuUpContainer className='rounded-full'><RiYoutubeFill size={18}/></NeuUpContainer></Link>
          </li>
        </ul>
        <NeuSearchInput className='flex-grow' placeholder="Search..."/>
      </div>

      <div className="flex items-center">
        <div className="space-x-10 mr-5 2xl:mr-14">
          <NeuUpContainer>
            <img src='/assets/images/icon_bell.png'/>
          </NeuUpContainer>
          <NeuUpContainer>
            <img src='/assets/images/icon_message.png'/>
          </NeuUpContainer>
          <NeuUpContainer onClick={handleSwitchTheme} className='hover:cursor-pointer'>
            {theme.activeTheme == 'light' && <HiSun size={22}/>}
            {theme.activeTheme == 'dark' && <HiOutlineMoon size={22}/>}        
          </NeuUpContainer>
        </div>
        <NeuVerticalLine/>
        <img onClick={() => dispatch(switchRightMenu())} className='ml-5 cursor-pointer' src="/assets/images/icon_menu.png" alt="" />
      </div>
    </div>
  )
}
