import React from 'react'
import Line from './Line'
import Biman from '../assets/Biman.png'
import './BBA.css'

const BBA = () => {
  return (
    <div>
      <img src={Biman} alt="Biman" className='biman_icon'/>
        <h3 className='h3-1'>Biman Bangladesh</h3>
        <h3 className='h3-2'>Airlines</h3>
        <p className='line1'>BG 178 | W & BG 671 | E</p>
        <p className='time'>5H 35 MIN</p>
        <Line />
        <p className='time2'>2 STOPS</p>
    </div>
  )
}

export default BBA
