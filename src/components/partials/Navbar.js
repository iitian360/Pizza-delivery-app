import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import { BsCart4 } from 'react-icons/bs'
import { HiMenuAlt2 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'

const Navbar = () => {
    const [nav, setnav] = useState(false);
    const handleNva=()=>{
        setnav(!nav);
        console.log(nav);
        
    }
    return (
        <nav className='navbar'>
            <div className='logo_container'>
                Carta
            </div>
            <ul className='navlist'>
                <li className='navlink'>
                    <Link style={{ textDecoration: "none", color: 'black' }} to={'/'}> Home </Link>
                </li>
                <li className='navlink'>
                    <Link style={{ textDecoration: "none", color: 'black' }} to={'/menu'}> Menu </Link>
                </li>
                <li className='navlink'>
                    <Link style={{ textDecoration: "none", color: 'black' }} to={'/about'}> about </Link>
                </li>
                <li className='navlink'>
                    <Link style={{ textDecoration: "none", color: 'black' }} to={'/contact'}> contact </Link>
                </li>
                <li className='navlink' title='Cart'>
                    <Link style={{ textDecoration: "none", fontSize: "20px", color: 'red' }} to={'/cart'}> {<BsCart4 />} </Link>
                </li>
                <li className='navlink'>
                    <Link style={{ textDecoration: "none", color: 'orangered' }} to={'/login'}>Login</Link>
                </li>
            </ul>

            
            {/* burger section */}
            
            <div className='burger' onClick={handleNva}>
                <HiMenuAlt2 />
            </div>
            {
                !nav && 
                <div className='burger_nav'>
                <ul>

                    <li className='burgerLink'>
                        <Link style={{ textDecoration: "none", color: 'white' }} to={'/'}> Home </Link>
                    </li>
                    <li className='burgerLink'>
                        <Link style={{ textDecoration: "none", color: 'white' }} to={'/menu'}> Menu </Link>
                    </li>
                    <li className='burgerLink'>
                        <Link style={{ textDecoration: "none", color: 'white' }} to={'/about'}> about </Link>
                    </li>
                    <li className='burgerLink'>
                        <Link style={{ textDecoration: "none", color: 'white' }} to={'/contact'}> contact </Link>
                    </li>
                    <li className='navlink'>
                    <Link style={{ textDecoration: "none", color: 'gray' }} to={'/login'}>Login</Link>
                    </li>
                    <li className='burgerLink' title='Cart'>
                        <Link style={{ textDecoration: "none", fontSize: "20px", color: 'orangered' }} to={'/cart'}> {<BsCart4 />} </Link>
                    </li>
                </ul>
                <div className='cancel' onClick={handleNva}><RxCross2 /></div>
            </div>

            }
            
        </nav>
    )
}

export default Navbar
