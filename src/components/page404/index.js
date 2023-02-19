import React from 'react'
import gif from '../../assets/img/page404.gif'

const Page404 = () => {
  return (
    <div className='df aic jcc' style={{
      height: 'calc(max(100vh, 35rem))',
      width: 'calc(max(100vw, 45rem))',
    }}>
      <img style={{
        height: 'calc(max(80vh, 30rem))',
        width: 'auto',
        backgroundSize: 'cover'
      }} src={gif} alt="" />
    </div>
  )
}

export default Page404