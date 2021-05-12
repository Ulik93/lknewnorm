import React from 'react'
import { NavLink } from 'react-router-dom'
import x from './Modal.module.css'
import './vlad.css'
export default function Sidebar() {
    return (
        
        <div className='vlad_navbar'>
            <div className='flex-item'>
                <NavLink className='flex-item' to="/parfume">Perfume</NavLink>
            </div>
            <div className='flex-item'>
                <NavLink className='flex-item'  to="/shoes">Shoes</NavLink>
            </div>
            <div >
                <NavLink className='flex-item' to="/clothes">Clothes</NavLink>
            </div>
        </div>
       
    )
}
