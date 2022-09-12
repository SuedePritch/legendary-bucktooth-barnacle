import React from 'react'
import './Resume.css'
import JamesPritchardResume from '../JamesPritchardResume.pdf'

//resume is a html/jsx version of of the word doc that can also be downloaded
function Resume() {
    return (
        <div className='resume-container'>
            <button className="download">
                <a href={JamesPritchardResume} alt="Resume" download>Download Resume</a>
            </button>
            <h1>James Pritchard</h1>
            <ul>
                <li>Thunder Bay, Ontario, Canada | <a href="tel:1-250-617-0145">Phone 250-617-0145</a> | <a href="mailto:james.edward.pritchard@gmail.com">Email: james.edward.pritchard@gmail.com</a></li>
                <li><a href="https://github.com/SuedePritch">GitHub: https://bit.ly/3ps8ulO</a> | <a href="https://www.linkedin.com/in/james-pritchard-a2b06b233/">LinkedIn: https://bit.ly/3CdRd7w </a>| <a href="https://suedepritch.github.io/legendary-bucktooth-barnacle/">Portfolio: https://bit.ly/3AsMAF6</a></li>
            </ul>
            <h2>Professional Summary</h2>
            <p>Full-stack developer with a certificate from the University of Toronto full-stack development program. Proven problem solver specializing in the MERN stack with extensive knowledge of blockchain and web3 technologies. Life-long learner that excels at producing clean, readable, well-commented code while consistently striving to improve technical skills. Intensely curious about technology and eager to implement cutting-edge solutions.</p>  
            <h2>Technical Skills</h2>
            <p className='tech-skill-list'>JavaScript | TypeScript | React | Angular | HTML | CSS | SCSS | SASS | Scalable Vector Graphics | NodeJS | MongoDB | MySQL | Solidity | Truffle | Ganache | Remix | VSCode | Git | GitHub</p>
            <h2>Relevant Professional Experience</h2>
            <div>
                <h3>Freelance Web Developer</h3>
                <p>2022 - Present</p>
                <p>Plan and develop software solutions and web applications, supporting and maintaining websites and digital products for various small companies. Creates solutions for identified problems or bugs.Develops and validates test routines to ensure the quality of the external and internal interface.</p>
            </div>
            <h2>Additional Professional Experience</h2>
            <div>
                <h3>Shaw Cable Systems Ltd.<br /> Fort St. John, BC</h3>
                <p>2019 - 2021</p>
                <b>System Technician</b>
                <p>
                    Maintained internet and cable infrastructure to ensure 99.99% uptime for 16000+ customers.
                    Installed services to business and residential customers including cable, internet, phone, and security systems with a 4.8/5 customer feedback score.
                    Facilitated upgrades to local infrastructure that increased systems from 860Mhz to 1.5 GHz allowing Orthogonal Frequency Division Multiplexing increasing upload/downspeeds from 600mbps to 1.5gbps.
                </p>
                <h3>Windfirm Resources<br /> Smithers, BC</h3>
                <p>2009 - 2019</p>
                <b>Foreman | Faller | Silviculture |  OFA Level 3</b>
                <p>
                    Planted over 500,000 seedlings with my highest production day being 4735.
                    Trained workers on proper technique, chainsaw safety, tree identification, orienteering, and safety systems with perfect quality and no major incidents.
                    Served as the primary Occupational First Aid Level 3 attendant establishing care for remote worksites.
                    Managed scheduled projects ensuring strict compliance with all applicable deadlines and budgets.
                </p>
            </div>
    </div>
    )
}

export default Resume