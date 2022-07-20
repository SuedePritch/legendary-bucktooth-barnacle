import React from 'react'
import './Footer.css'
import github from '../images/github.svg'
import email from '../images/email.svg'
import linkedin from '../images/linkedin.svg'
import phone from '../images/phone.svg'

function Footer() {
return (
    <div className='footer'>
        <div className="contact-icons">
            <img src={github} alt="github" />
            <img src={email} alt="email" />
            <img src={linkedin} alt="linkedin" />
            <img src={phone} alt="phone" />
        </div>
    </div>
)
}

export default Footer