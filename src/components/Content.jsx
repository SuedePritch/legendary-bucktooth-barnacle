import React from 'react'

import About from './About';
import Project from './Project';
import Contact from './Contact';

function Content(props) {
    let currentPage;
    if (props.state.page === "Home") {
        currentPage = <About />
    } else if(props.state.page === "Project"){
        currentPage = <Project/>
    } else if(props.state.page === "Contact"){
        currentPage = <Contact />
    }
    return (
    <div>{currentPage}</div>
    )
}

export default Content