import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt="logo"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, ipsam earum molestiae dolores fuga vel reiciendis velit a doloribus sequi consequuntur, sint repellendus corporis. Tempora nulla odio suscipit soluta eveniet?</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="facebook" />
                    <img src={assets.twitter_icon} alt="twitter" />
                    <img src={assets.linkedin_icon} alt="linkedin" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94 712 585 971</li>
                    <li>Gehanliyanage@outlook.com</li>
                </ul>
            </div>
        </div> 
        <hr/>
        <p className='footer-copyright'>Copyright 2025 © Gehan.com - All Right Reserved</p>
    </div>
  )
}

export default Footer