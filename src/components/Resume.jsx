import React from 'react'
import './Resume.css'

//resume is a html/jsx version of of the word doc that can also be downloaded
function Resume() {
    return (
        <div className='resume-container'>
            <button className="download">
                    <a href="./pritchard_resume.docx" alt="Resume" download>Download Resume</a>
                </button>
<h1>James Pritchard</h1>
Phone: 1-250-617-0245 <br />
Thunder Bay, Ontario, Canada

<h2>Summary</h2>
I am a full-stack developer with a certificate from the University of Toronto full-stack development program. I specialize in the MERN stack, and I also have extensive knowledge of blockchain and web3 technologies. I pride myself on producing clean, readable, well-commented code while always improving my technical skills. I am intensely curious about technology and am eager to learn and implement cutting-edge and legacy technologies.

<h2>Technical Skills</h2>
<ul>
    <li>JavaScript/TypeScript</li>
    <li>React/Angular</li>
    <li>HTML/CSS/SCSS/SASS</li>
    <li>Scalable Vector Graphics</li>
    <li>NodeJS</li>
    <li>MongoDB/MySQL</li>
    <li>Solidity</li>
    <li>Truffle/Ganache</li>
    <li>Remix/VSCode</li>
    <li>Git/GitHub</li>
</ul>

<h2>Education</h2>
University of Toronto Full Stack Developer Certificate <br />
MongoDB University<br />
Dapp University<br />
Blockgeeks<br />
Society of Cable Engineers: Maintenance Technology Level 2, Network Testing and Maintenance Level 1<br />
Fanshawe College Machinist Apprenticeship

<h2>Experience</h2>
<h3>
    Shaw Cable Systems Ltd., Fort St John BC <br />
    System Technician <br />
    2019-2021
</h3>
<ul>
    <li>Maintained Shaw’s internet and cable infrastructure to ensure a positive client experience.</li>
    <li>Installed services to business and residential customers including cable, internet, phone, and security systems.</li>
    <li>Participated in a significant upgrade to local infrastructure that increased local systems from 750/860Mhz to 1.5 GHz allowing Orthogonal Frequency Division Multiplexing.</li>
</ul>
<h3>
    Spectrum Resource Group Inc & Windfirm & Zanzibar & Reclaimit <br />
    Foreman, OFA Level 3, Silviculture Worker, Timber Cruiser, Faller, Brusher <br />
    2009-2018
</h3>
<ul>
    <li>Ensured quality to the standards set by the Ministry of Forests, Lands, Natural Resources</li>
    <li>Trained workers in the field while providing information on ever-changing safety guidelines and precautions, such as wildlife or dangerous trees.</li>
    <li>Liable for employee safety as the primary first aid attendant.</li>
    <li>Responsible for ensuring projects were completed on time and within budget.</li>
</ul>
    </div>
    )
}

export default Resume