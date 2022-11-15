import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Private({children}) {

  const profile = useSelector((state) => state.profile.value)
  const navigate = useNavigate()

  useEffect(() => {
    console.log("profile: ", profile)
    if(profile.userID == null){
      navigate('/auth?active=Login')
    }
  }, [profile])
  return (
    <div>{children}</div>
  )
}
