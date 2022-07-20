import React from 'react';
import './Navbar.css';

function Navbar(props) {
    return (
    <div className='navbar'>
        <div className="navlinks">
                <button
                    className={props.state.page === "Home" ? 'active' : 'navlink'}
                    onClick={() => props.state.setPage("Home")}
                >
                    Home
                </button>
                <button
                    className={props.state.page === "Project" ? 'active' : 'navlink'}
                    onClick={() => props.state.setPage("Project")}>
                    Portfolio
                </button>
                <button
                    className={props.state.page === "Contact" ? 'active' : 'navlink'}
                    onClick={() => props.state.setPage("Contact")}>
                    Contact
                </button>

                <button className="navlink">
                    <a href="./pritchard_resume.docx" alt="Resume" download>Resume</a>
                </button>
            
        </div>
    </div>
    )
}

export default Navbar