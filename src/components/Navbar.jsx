import React from 'react';
import './Navbar.css';

function Navbar(props) {
    console.log(props.state.page);
    
    return (
    <div className='navbar'>
        <div className="navlinks">
            <button onClick={() => props.state.setPage("Home")}>Home</button>
            <button onClick={() => props.state.setPage("Project")}>Project</button>
            
        </div>
    </div>
    )
}

export default Navbar