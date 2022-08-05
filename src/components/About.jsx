import React from 'react'
import './About.css'
import profilePic from '../images/CartoonJames.JPG'
//Profile picture and short bio
function About() {
    return (
        <div className='about'>
            <img src={profilePic} alt="James" />
            <p>I am a full-stack developer with a certificate from the University of Toronto full-stack coding bootcamp. I specialize in the MERN stack and I also have extensive knowledge of blockchain and web3 technologies. I have 10+ years experience in the forestry sector where I have proven technical and leadership excellence in logistics and project management. I honed my troubleshooting skills during my time with Shaw Cable Systems (ISP) where I maintained physical and digital infrastructure. I have extensively used HTML/CSS/SCSS, React, JavaScript, Solidity, Nodejs, MongoDb/MySQL to create full stack apps including an app for inventory management on e-commerce sites. I pride myself on producing clean, readable, well commented code while always improving my technical skills. I am intensely curious about technology and am eager to learn and implement cutting edge and legacy technologies. </p>
        </div>
    )
}

export default About