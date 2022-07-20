import React from 'react'
import './Project.css'
import goldenDevPic from '../images/goldenDev.png'
import employeeContactPic from '../images/employeeContact.png'
import weatherPic from '../images/weather.png'
import jediArchivesPic from '../images/jediarchives.png'
const projectData = [
    {   
        id:1,
        title: 'GoldenDevs',
        image: goldenDevPic,
        description: 'Freelance Developer site',
        repo: 'https://github.com/SuedePritch/fluffy-palm-tree',
        deployed:'https://protected-peak-08029.herokuapp.com/'
    },
    {
        id:2,
        title: 'Jedi Archives',
        image: jediArchivesPic,
        description: 'Star Wars database',
        repo: 'https://github.com/SuedePritch/crispy-spork',
        deployed:'https://suedepritch.github.io/crispy-spork/'
    },
    {
        id:3,
        title: 'Employee Contact Tracker',
        image: employeeContactPic,
        description: 'CLI CMS that creates an html page',
        repo: 'https://github.com/SuedePritch/scaling-journey',
        deployed:'https://github.com/SuedePritch/scaling-journey'
    },
    {
        id:4,
        title: 'Weather App',
        image: weatherPic,
        description: 'Frontend for third party API',
        repo: 'https://github.com/SuedePritch/sunshine-rainbows',
        deployed:'https://suedepritch.github.io/sunshine-rainbows/'
    },
]
function Project() {
return (
    <div>
        <ul className="projects">
            {projectData.map((result) => (
            // style={{"background": result.image}}
                <li className="project" key={result.id} >   
                    <div className="text">
                        <span className="project-title">{result.title}</span>
                        <span className="project-description">{result.description}</span>
                        <a href={result.repo} className="project-repo">GitHub</a>
                        <a href={result.deployed} className="project-repo">Live Site</a>
                    </div>

                    <img className="bg-image" src={result.image} alt='screenshot of app'></img>
        </li>
        ))}
    </ul>
    </div>
)
}

export default Project