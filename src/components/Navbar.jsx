import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
    <div className='navbar'>
        <div>James Pritchard</div>
        <div>
            <ul className='navlinks'>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar