// src/pages/About.jsx
import React from 'react';
import Image from 'react-bootstrap/Image';

export default function About() {
    return (
        <div id='about'>
            <div id='about-container'>
                <div className='about-title'>
                    <h1>About Me</h1>
                </div>
                <div className='image-container'>
                    <Image src={'/pictures/headshot.png'} alt='Caroline Pham Picture' className='profile-picture' />
                </div>
                <div className='introduction-container'>
                    <p className='introduction'>I'm a second-year Computer Science and Design student at
                        Northeastern University with a strong passion for all things
                        front-end and design. Currently, I'm focusing my studies on
                        software development, and I've had the privilege of honing
                        my programming skills in Java through my coursework.
                        Alongside my academic pursuits, I'm a self-taught enthusiast
                        in creative tools like Figma and Illustrator. I find immense joy
                        in blending my technical knowledge with a keen eye for
                        design, bringing a unique perspective to the world of
                        software development.</p>
                </div>

                <div className='resume'>
                    <a href='https://docs.google.com/document/d/1KQcPV-3xUob7V1ecPRx3_fE0-y8TJBG2hXmjcggUpUY/edit?usp=sharing'
                        target='_blank' rel='noreferrer' class='button-style'>Resume</a>
                </div>
            </div>
        </div>
    )
}