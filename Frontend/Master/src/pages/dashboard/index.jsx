import React from 'react'
import NeuDownContainer from '../../common/ui/container/NeuDownContainer'
import NeuUpContainer from '../../common/ui/container/NeuUpContainer'
import NeuHorizontalLine from '../../common/ui/line/NeuHorizontalLine'
import NeuVerticalLine from '../../common/ui/line/NeuVerticalLine'
import Layout from '../../layout'

export default function Dashboard() {
  return (
    <Layout>
      <div className='space-x-5 space-y-5'>
        <NeuUpContainer>
          Dashboard
        </NeuUpContainer>
        <NeuDownContainer>
          Dashboard
        </NeuDownContainer>
        <NeuHorizontalLine/>
        <NeuVerticalLine/>
      </div>
    </Layout>
  )
}
