import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { openAllMenu } from '../../features/collapse.slice'
import Layout from '../../layout'

export default function Dashboard() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(openAllMenu())
  }, [])
  return (
    <Layout>
      <div className='space-x-5 space-y-5'>

      </div>
    </Layout>
  )
}
