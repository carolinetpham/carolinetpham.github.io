import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsArrowUpCircle } from 'react-icons/bs';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_USER_ID
            )
            .then(
                (result) => {
                    setStateMessage('Sent! I will get back to you as soon as possible!');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); // hide message after 5 seconds
                },
                (error) => {
                    setStateMessage('Something seems to have gone wrong! Please try again in a few minutes.');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); // hide message after 5 seconds
                }
            );

        // Clears form after sending email
        e.target.reset();
    };
    return (
        <div id='contact'>
            <div className='contact-title'>
                <h1>Contact</h1>
            </div>
            <div className='contact-form'>
                <form onSubmit={sendEmail}>
                    <div className="name-email">
                        <label>Name: </label>
                        <input type='text' name='user_name' required />
                        <label>Email: </label>
                        <input type='email' name='user_email' required />
                    </div>
                    <div className="sub-msg">
                        <label>Subject: </label>
                        <input type='text' name='subject' required />
                        <label>Message: </label>
                        <textarea name='message' required />
                    </div>
                    <button type='submit' disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                    {stateMessage && <p>{stateMessage}</p>}
                </form>
            </div>
            <div className='scroll-container'>
                <div className='scroll-to-top'>
                    <a href='#home'>
                        <BsArrowUpCircle />
                    </a>
                </div>
            </div>
        </div>
    );
};
