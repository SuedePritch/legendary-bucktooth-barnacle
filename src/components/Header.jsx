import React from 'react'
import './Header.css'
import Navbar from './Navbar'

function Header(props){

    return (
        <div className='header'>
            <h1>James Pritchard </h1>
            <h2>Full Stack Developer</h2>
            
            <Navbar state={props.state}></Navbar>
        </div>
    )
}

export default Header