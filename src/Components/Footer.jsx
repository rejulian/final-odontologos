import React from 'react'
import DH from '../images/DH.png'
import instagram from '../images/ico-instagram.png'
import facebook from '../images/ico-facebook.png'
import whatsapp from '../images/ico-whatsapp.png'
import tiktok from '../images/ico-tiktok.png'

const Footer = () => {
  return (
    <footer>
      <div className='left'>
        <p>Powered by</p>
        <img className='dh-logo' src={DH} alt="Digital House logo" />
      </div>
      <div className='right'>
        <img className='icon' src={facebook} alt="" />
        <img className='icon' src={instagram} alt="" />
        <img className='icon' src={whatsapp} alt="" />
        <img className='icon' src={tiktok} alt="" />
      </div>
    </footer>
  )
}

export default Footer