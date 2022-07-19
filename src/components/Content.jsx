import React from 'react'

import About from './About';
import Project from './Project';

function Content(props) {
    let currentPage;
    if (props.state.page === "Home") {
        currentPage = <About />
    } else if(props.state.page === "Project"){
        currentPage = <Project/>
    } else {
        console.log('ERROR');
    }
  return (
    <div>{currentPage}</div>
  )
}

export default Content