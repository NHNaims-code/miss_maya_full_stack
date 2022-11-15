import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import NeuActionButton from '../../../../common/ui/button/NeuActionButton'
import NeuSocialIconUpButton from '../../../../common/ui/button/NeuSocialIconUpButton'
import NeuCheckBox from '../../../../common/ui/input/NeuCheckBox'
import NeuRoundedDownInput from '../../../../common/ui/input/NeuRoundedDownInput'
import NeuHorizontalLineUp from '../../../../common/ui/line/NeuHorizontalLineUp'
import NeuSliderSelect from '../../../../common/ui/select/NeuSliderSelect'
import NeuTextUp from '../../../../common/ui/text/NeuTextUp'
import Email from './components/Email'
import FaceID from './components/FaceID'
import Fingerprint from './components/Fingerprint'
import SMS from './components/SMS'
import './style.css'

export default function Reset({}) {

  const [searchParams, setSearchParams] = useSearchParams()

  const active = searchParams.get('active')
  const tab = searchParams.get('tab')

  const data = [
    {icon: false, text: 'Email', action: '/auth?active=Reset&tab=Email', active: 'Email', query: 'tab'},
    {icon: false, text: 'SMS', action: '/auth?active=Reset&tab=SMS', active: 'SMS', query: 'tab'},
    {icon: false, text: 'Fingerprint', action: '/auth?active=Reset&tab=Fingerprint', active: 'Fingerprint', query: 'tab'},
    {icon: false, text: 'Face ID', action: '/auth?active=Reset&tab=Face_ID', active: 'Face_ID', query: 'tab'},
  ]

  const [selectedMenu, setSelectedMenu] = useState()

  return (
    <div className='flex flex-col items-center'>
      <div className="sign_in_profile_image__root mt-16">
        <div style={{backgroundImage: 'url(/assets/brand/maya.jpg)'}} className="bg-white w-full h-full bg-no-repeat bg-cover bg-center"/>
      </div>
      <h1 className='profile_page__title uppercase mt-10'>RESET PASSWORD</h1>

      <div className="w-full">
        <p className='rest__slider_title mt-10 mb-5'>Verification Via</p>
        <NeuSliderSelect onChange={(menu) => setSelectedMenu(menu.text.toLowerCase())} data={data}/>
      </div>

      <div className="w-full">
        {active == 'Reset' && tab == 'Email' && <Email/>}
        {active == 'Reset' && tab == 'SMS' && <SMS/>}
        {active == 'Reset' && tab == 'Fingerprint' && <Fingerprint/>}
        {active == 'Reset' && tab == 'Face_ID' && <FaceID/>}
      </div>

    </div>
  )
}
