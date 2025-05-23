import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState('shop'); 

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} width={130} height={130} alt=''/>
        <p>SHOP SHOP</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==='shop'?<h/>:<></>}</li>
        <li onClick={()=>{setMenu('men')}}><Link style={{textDecoration: 'none'}}to='/men'>Men</Link>{menu==='men'?<h/>:<></>}</li>
        <li onClick={()=>{setMenu('women')}}><Link style={{textDecoration: 'none'}}to='/women'>Women</Link>{menu==='women'?<h/>:<></>}</li>
        <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration: 'none'}}to='/kids'>Kids</Link>{menu==='kids'?<h/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} width={30} height={30} alt=''/></Link>

        <div className= 'nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar