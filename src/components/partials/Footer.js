import React from 'react'
import './Footer.css'
import footimg from '../../assets/footer.png'
import {BsFacebook} from 'react-icons/bs'
import {AiFillYoutube,AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-bx'>
      
      <div className='foot-link'>
        <div className='link-bx'>
          <ul>
            <li className='footlink'>Home</li>
            <li className='footlink'>services</li>
            <li className='footlink'>Menu</li>
            <li className='footlink'>Order</li>
            <li className='footlink'>trends</li>
          </ul>
        </div>

        <div className='link-bx'>
          <ul>
            <li className='footlink'>Your cart</li>
            <li className='footlink'>register</li>
            <li className='footlink'>Order online</li>
            <li className='footlink'>about us</li>
            <li className='footlink'>contact</li>
          </ul>
        </div>
        <div className='link-bx'>
          <ul>
            <li className='footlink'> +91-123-456-7891</li>
            <li className='footlink'>example@gmail.com</li>
          </ul>
          <div className='social'>
            <a href="#"><BsFacebook/> </a>
            <a href="#"><AiFillYoutube/></a>
            <a href="#"><AiFillTwitterCircle/></a>
          </div>
        </div>

      </div>
      <div className='footimg'>
        <img src={footimg} alt="" />
      </div>
      
    </div>
  )
}

export default Footer
