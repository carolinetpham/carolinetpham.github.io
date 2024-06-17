// src/pages/About.jsx
import React from 'react';
import Image from 'react-bootstrap/Image';

export default function About() {
    return (
        <div id='about'>
            <div className='about-title'>
                <h1>About Me</h1>
            </div>
            <div className='about-container'>
                <Image src={'/pictures/headshot.png'} alt='Caroline Pham Picture' className='profile-picture' />
                <div className='intro-resume'>
                    <p className='introduction'>I'm a rising third-year majoring in Computer Science and Design at
                        Northeastern University with a strong passion for front-end development and UI/UX design.
                        Currently, I'm focusing my studies on software development, and I've had the privilege of
                        honing my programming skills in Java through my coursework. Alongside my academic pursuits,
                        I'm a self-taught enthusiast in creative tools like Figma and illustrator and front-end frameworks like React and Bootstrap. I find immense joy in blending my
                        technical knowledge with a keen eye for design, bringing a unique perspective to the world of software development.</p>
                    <a href='https://drive.google.com/file/d/1oiF1Wu4GbbR3Vy2QILjLjtTgMXqTobDO/view?usp=sharing'
                        target='_blank' rel='noreferrer' class='button-style'>Resume</a>
                </div>
            </div>
        </div>
    )
}