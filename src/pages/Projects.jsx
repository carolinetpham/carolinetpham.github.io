// src/pages/Projects.jsx
import React from 'react';

export default function Projects() {
    return (
        <div id='projects'>
            <div className='projects-title'>
                <h1>Projects</h1>
            </div>
            <div className='homework-task-tracker'>
                <a href="https://www.figma.com/design/JHx83jOa8YN8Zv5R6Wq4lU/AEye?node-id=207-282&node-type=CANVAS" target="_blank" rel="noreferrer">
                <h1 className='hwt-title'>AEye - Figma</h1>
                    <img src="/pictures/aeye-project-photo.png" alt="AEye Project" className='project-photo' />
                    </a>
                <p className='hwt-desc'>Designed a game-like app to allow users to learn to decipher between real world applications and AI applications.</p>
            </div>
            <div className='personal-portfolio'>
                <h1 className='personal-port-title'>Personal Portfolio - React, Bootstrap</h1>
                <p className='personal-port-desc'>Designed and developed a personal portfolio website using React and Bootstrap.
                    Through self-teaching, I was able to become proficient in React and Bootstrap allowing me to develop this website!
                    Check out my original Figma design <a href=
                        'https://www.figma.com/file/vurtkpecVzrRNCu1mgylV2/caroline-pham-webside-design-2024?type=design&node-id=0%3A1&mode=design&t=Y4DeOgUhrc64zVay-1'
                        target='_blank' rel='noreferrer' className='figma-link'>
                        here!</a> I will be continuing to update this website as I learn more!</p>
            </div>
            <div className='virtual-bullet-journal'>
                <h1 className='vbj-title'>Virtual Bullet Journal - Java, JavaFX</h1>
                <p className='vbj-desc'>Collaborating alongside two classmates, we developed a virtual bullet journal in order to manage tasks throughout
                    the week with Java and JavaFX. I designed the entire GUI in order to have a visually appealing interface. Check out the repository <a href=
                        'https://github.com/carolinetpham/bullet-journal-planner'
                        target='_blank' rel='noreferrer' className='figma-link'>
                        here!</a></p>
            </div>
        </div>
    )
}