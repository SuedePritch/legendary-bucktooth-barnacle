import React from 'react'

import About from './About';
import Project from './Project';
import Contact from './Contact';
import Resume from './Resume'

//Content uses page state to render the current page
//page state is set in navbar component
function Content(props) {
    let currentPage;
    if (props.state.page === "Home") {
        currentPage = <About />
    } else if(props.state.page === "Project"){
        currentPage = <Project/>
    } else if(props.state.page === "Contact"){
        currentPage = <Contact />
    }else if(props.state.page === "Resume"){
        currentPage = <Resume />
    }
    return (
    <div>{currentPage}</div>
    )
}

export default Content