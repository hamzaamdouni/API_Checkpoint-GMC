import React from 'react'
import './NavBar.css'
import logo from '../../Assets/Logo.png' 
import { Link } from 'react-router-dom'
import { useState } from 'react'

const NavBar = ({setSearching}) => {

    const [valueSearch,setValueSearch] = useState('')

    const handelClick = () =>{
        setSearching(valueSearch);
    }

    const Style = {
        home : {
            textDecoration: 'none',
            transition: 'color 0.5s ease',
            color: 'rgb(230, 247, 3)'
        }
        
    }
    return (
        <div className='NavBar'>
            <div className='MenuLogo'>
            <div>
                <img src={logo} alt='' className='logo'/>
            </div>
            <div className="menu">
                <div className="label">Menu</div>
                <div className="spacer" />
                <div className="item"><Link to='/' style={Style.home}><span>Home</span></Link></div>
                <div className="item"><Link to='/lab' style={Style.home}><span>My  Lab</span></Link></div>
                <div className="item"><span>About As</span></div>
                <div className="item"><span>Contact</span></div>
            </div>
            </div>
            <div className="search-box">
                <input 
                type="text" 
                className="input-search" 
                placeholder="Search..."  
                onChange={(e)=>{setValueSearch(e.target.value);}}
                />
                {handelClick()}
            </div>
        </div>
    )
}

export default NavBar
