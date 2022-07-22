import React from 'react'
import { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import './Contact.css'
function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'email') {
        setEmail(inputValue);
    } else if (inputType === 'name') {
        setName(inputValue);
    } else {
        return
    }
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !name) {
        setErrorMessage('Must enter name and a valid email');
        return;
    }
    setName('');
    setEmail('');
    };
    return (
        <form className='contact-form'>
            <input
                value={name}
                name="name"
                onChange={handleInputChange}
                onBlur={(e) => { 
                    if (!e.target.value) {
                        alert('Name is required')
                    }
                }}
                type="text"
                placeholder="name"/>
            <input
                value={email}
                name="email"
                onChange={handleInputChange}
                onBlur={(e) => {
                    if (!e.target.value) {
                        alert('Email is required')
                    }
                }}
                type="email"
                placeholder="email" />
            
            <textarea type="text" name="message" placeholder='Message' className='message'/>
            <button type="submit" onClick={handleFormSubmit} >Submit</button>
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        )}
        </form>
    )
}

export default Contact