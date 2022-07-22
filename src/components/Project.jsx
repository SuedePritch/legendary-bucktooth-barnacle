import React from 'react'
import './Project.css'
import goldenDevPic from '../images/goldenDev.png'
import employeeContactPic from '../images/employeeContact.png'
import weatherPic from '../images/weather.png'
import jediArchivesPic from '../images/jedi.gif'
import codeQuizPic from '../images/codeQuiz.png'
import passwordGeneratorPic from '../images/passwordGenerator.png'

//project data is used internally but could be moved into a database or fetched using github API
const projectData = [
    {   
        id:1,
        title: 'GoldenDevs',
        image: goldenDevPic,
        description: 'This project is for freelance developers and clients to connect. It utilizes a SQL database using the Sequelize ORM, express-sessions and bcrypt for user authentication, a NodeJS/Express server, and Handlebars for the templating engine. ThreeJS was also used to create a 3D animated landing page. This was a collaborative project. I was responsible for building the API, landing page and logo design, UI/UX, authentication and the database tables referencing the tech icons.',
        repo: 'https://github.com/SuedePritch/fluffy-palm-tree',
        deployed:'https://protected-peak-08029.herokuapp.com/'
    },
    {
        id:2,
        title: 'Jedi Archives',
        image: jediArchivesPic,
        description: 'This project uses a third-party Star Wars API and provides the UI for research on the Star Wars universe. It utilizes JavaScript/jQuery, Tailwinds CSS, Star Wars API, and the Wikipedia API. This was a collaborative project in that I was responsible for integrating the APIs, and the landing page design.',
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
    {
        id:5,
        title: 'Code Quiz',
        image: codeQuizPic,
        description: 'Technical Code Quiz',
        repo: 'https://github.com/SuedePritch/urban-invention',
        deployed:'https://suedepritch.github.io/urban-invention/'
    },
    {
        id:6,
        title: 'Password Generator',
        image: passwordGeneratorPic,
        description: 'Generates Secure Passwords',
        repo: 'https://github.com/SuedePritch/psychic-lamp',
        deployed:'https://suedepritch.github.io/psychic-lamp/'
    },
]

//project component iterates over the project data to display all projects
//uses a github and link svg to link to repo or deployed
function Project() {
return (
    <div>
        <ul className="projects">
            {projectData.map((result) => (
                <li className="project" key={result.id} >   
                    <div className="text">
                        <span className="project-title">{result.title}</span>
                        <span className="project-description">{result.description}</span>
                        <a href={result.repo} className="project-link"><svg viewBox="0 0 33 33"><path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/></svg></a>
                        <a href={result.deployed} className="project-link"><svg viewBox="0 0 50 50" ><path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" d="M33.6 1L49 1 49 16.4M26.4 23.6L48.5 1.5"/><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="6" d="M32,11H2c-0.6,0-1,0.4-1,1v36c0,0.6,0.4,1,1,1h36c0.6,0,1-0.4,1-1V18"/></svg></a>
                    </div>

                    <img className="bg-image" src={result.image} alt='screenshot of app'></img>
            </li>
        ))}
    </ul>
    </div>
)
}

export default Project