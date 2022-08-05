import React from 'react'
import './Resume.css'

//resume is a html/jsx version of of the word doc that can also be downloaded
function Resume() {
    return (
        <div className='resume-container'>
            <button className="download">
                    <a href="./JamesPritchardResume.pdf" alt="Resume" download>Download Resume</a>
                </button>
<h1>James Pritchard</h1>
Phone: 1-250-617-0245 <br />
Thunder Bay, Ontario, Canada<br />
<a href="mailto:james.edward.pritchard@gmail.com" id="email-link">james.edward.pritchard@gmail.com</a>

<h2>Summary</h2>
Full-stack developer with a certificate from the University of Toronto full-stack development program. Specializing in the MERN stack with extensive knowledge of blockchain and web3 technologies. Excel at producing clean, readable, well-commented code while consistently striving to improve technical skills. Intensely curious about technology and eager to implement cutting-edge and legacy technologies.

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
    <li>Maintained Shaw’s internet and cable infrastructure to ensure a positive client experience.   	
    </li>
    <li>Installed services to business and residential customers including cable, internet, phone, and security systems.</li>
    <li>Facilitated significant upgrades to local infrastructure that increased local systems from 750/860Mhz to 1.5 GHz allowing Orthogonal Frequency Division Multiplexing.</li>
</ul>
<h3>
    Spectrum Resource Group Inc & Windfirm & Zanzibar & Reclaimit <br />
    Foreman, OFA Level 3, Silviculture Worker, Timber Cruiser, Faller, Brusher <br />
    2009-2018
</h3>
<ul>
    <li>Navigated quality standards set by the Ministry of Forests, Lands, Natural Resources.</li>
    <li>Trained workers in the field while providing information on ever-changing safety guidelines and precautions, such as wildlife or dangerous trees.</li>
    <li>Acted as primary Occupational First Aid Level 3 attendant establishing care for remote worksites with large workforces.</li>
    <li>Managed scheduled projects ensuring strict compliance with all applicable deadlines and budgets. </li>
</ul>
    </div>
    )
}

export default Resume