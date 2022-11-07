import React from 'react'
import { useSelector } from 'react-redux'
import './style.css'

export default function Profile({name='guest'}) {
  const theme = useSelector((state) => state.theme.value)

  return (
    <div className='flex flex-col items-center px-4 pt-10 pb-5 shadow-lg profile_cart__root'>
      <div className='relative root-profile-bg p-[5px]'>
        <div className="rounded-golden-border w-[54px] h-[54px]">
          <img src='/assets/brand/maya.jpg'/>
        </div>
        {/* label */}
        <div className="absolute top-0 left-[2px]">
          { theme.activeTheme == 'light' && (<img src="/assets/images/icon_king_light.png" alt="" />)}
          { theme.activeTheme == 'dark' && (<img src="/assets/images/icon_king_dark.png" alt="" />)}
        </div>
        {/* country */}
        <div className="rounded-full absolute bottom-0 -left-[7px] pp-country-container">
          <div className="w-[23px] h-[23px] flex flex-col justify-center items-center">
            <img src="/assets/svg/flag_canada.svg" alt="" />
            <p className="capitalize font-semibold text-[4px] leading-[6px] text-[#B5B5B5]">CANADA</p>
          </div>
        </div>
        {/* varified */}
        <div className="rounded-full absolute bottom-0 -right-[6px] pp-country-container">
          <div className="w-[23px] h-[23px] flex flex-col justify-center items-center">
            <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.05649 0.855797C5.919 0.715241 5.7544 0.603317 5.57295 0.526651C5.39151 0.450495 5.19679 0.411133 5.00001 0.411133C4.80323 0.411133 4.60851 0.450495 4.42707 0.526651C4.24563 0.603317 4.08102 0.715241 3.94354 0.855797L3.62562 1.18189L3.17075 1.17627C2.97398 1.17423 2.77872 1.21102 2.59625 1.28513C2.41379 1.35975 2.2482 1.46964 2.10866 1.60866C1.96964 1.74819 1.85976 1.9138 1.78513 2.09626C1.71102 2.27873 1.6737 2.47397 1.67626 2.67075L1.68138 3.12565L1.35629 3.44356C1.21573 3.58105 1.10381 3.74562 1.02714 3.92707C0.950983 4.10851 0.911621 4.30324 0.911621 4.50002C0.911621 4.6968 0.950983 4.89205 1.02714 5.07349C1.10381 5.25494 1.21573 5.41899 1.35629 5.55648L1.68188 5.8744L1.67626 6.32929C1.6737 6.52607 1.71102 6.72183 1.78513 6.90429C1.85976 7.08625 1.96964 7.25236 2.10866 7.39138C2.2482 7.53041 2.41379 7.6408 2.59625 7.71492C2.77872 7.78903 2.97398 7.82633 3.17075 7.82377L3.62562 7.81867L3.94354 8.14373C4.08102 8.2848 4.24563 8.39674 4.42707 8.47289C4.60851 8.54905 4.80323 8.5884 5.00001 8.5884C5.19679 8.5884 5.39151 8.54905 5.57295 8.47289C5.7544 8.39674 5.919 8.2848 6.05649 8.14373L6.3744 7.81816L6.82927 7.82377C7.02605 7.82633 7.22181 7.78903 7.40377 7.71492C7.58623 7.6408 7.75182 7.53041 7.89136 7.39138C8.03038 7.25236 8.14027 7.08625 8.21489 6.90429C8.289 6.72183 8.32632 6.52607 8.32376 6.32929L8.31865 5.8744L8.64374 5.55648C8.7848 5.41899 8.89622 5.25494 8.97288 5.07349C9.04904 4.89205 9.0884 4.6968 9.0884 4.50002C9.0884 4.30324 9.04904 4.10851 8.97288 3.92707C8.89622 3.74562 8.7848 3.58105 8.64374 3.44356L8.31815 3.12565L8.32376 2.67075C8.32632 2.47397 8.289 2.27873 8.21489 2.09626C8.14027 1.9138 8.03038 1.74819 7.89136 1.60866C7.75182 1.46964 7.58623 1.35975 7.40377 1.28513C7.22181 1.21102 7.02605 1.17423 6.82927 1.17627L6.3744 1.18137L6.05649 0.856312V0.855797ZM6.20317 3.91429L4.66984 5.44762C4.64632 5.47165 4.61771 5.49056 4.58704 5.50334C4.55586 5.51612 4.52263 5.52276 4.4889 5.52276C4.45517 5.52276 4.42194 5.51612 4.39076 5.50334C4.36009 5.49056 4.33148 5.47165 4.30796 5.44762L3.5413 4.68096C3.51779 4.65745 3.49889 4.62933 3.48611 4.59815C3.47282 4.56697 3.46618 4.53376 3.46618 4.50002C3.46618 4.46629 3.47282 4.43306 3.48611 4.40239C3.49889 4.37122 3.51779 4.34311 3.5413 4.31909C3.56532 4.29558 3.59342 4.27666 3.62409 4.26389C3.65527 4.25111 3.6885 4.24447 3.72223 4.24447C3.75597 4.24447 3.7892 4.25111 3.82038 4.26389C3.85104 4.27666 3.87966 4.29558 3.90317 4.31909L4.4889 4.90533L5.8413 3.55242C5.88934 3.50438 5.95426 3.4778 6.02223 3.4778C6.09021 3.4778 6.15512 3.50438 6.20317 3.55242C6.25121 3.60046 6.27829 3.66538 6.27829 3.73336C6.27829 3.80133 6.25121 3.86625 6.20317 3.91429Z" fill="#77CB43"/></svg>
          </div>
        </div>
        {/* Live */}
        <div className="absolute left-[21px] -bottom-[6px]">
          <p className='live-container pl-[4px] pr-[3px] text-[#77CB43] font-semibold text-[10px] leading-[15px]'>LIVE</p>
        </div>
        
      </div>
      {/* username */}
      <div className="username-container mt-[13px]">
        <p className='profile__username uppercase mx-[3px] whitespace-nowrap font-semibold text-[13px] leading-[19.5px]'>{name}</p>
      </div>
    </div>
  )
}
