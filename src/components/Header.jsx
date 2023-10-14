import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import Bars from '../assets/bars.png'
import './Header.css'
import { Link } from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth<=768 ? true:false
  const[menuOpened, SetMenuOpened] = useState(false)
  return (
    <div className='header'>
    <img className='logo' src={Logo} alt='company_logo' />
    {(menuOpened === false && mobile === true)? (
      <div style={{
                  backgroundColor: 'var(--appColor)', 
                  padding:'0.5rem',
                  borderRadius:'5px'
                }} 
                
                onClick={()=> SetMenuOpened(true)}> 
        <img src={Bars}  alt ='' style={{width:'1.5rem', height: '1.5rem'}}/> 
      </div>

  ):  <ul className='header-menu'>
        <li ><Link onClick={()=> SetMenuOpened(false)} activeClass= "active" to ='home' span={true} smooth={true}>Home</Link></li>
        <li ><Link onClick={()=> SetMenuOpened(false)} to='programs' span={true} smooth={true}>Programs</Link></li>
        <li ><Link onClick={()=> SetMenuOpened(false)} to='Reasons' span={true} smooth={true}>Why Us</Link></li>
        <li ><Link onClick={()=> SetMenuOpened(false)} to='plans-container'span={true} smooth={true}>Plans</Link></li>
        <li ><Link onClick={()=> SetMenuOpened(false)} to='Testimonials' span={true} smooth={true}>Testimonials</Link></li>
        </ul>}    
    </div>
  )
}

export default Header
