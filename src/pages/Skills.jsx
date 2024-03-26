// src/pages/Skills.jsx
import React from 'react';

export default function Skills() {
    return (
        <div id='skills'>
            <div className='skills-title'>
                <h1>Skills</h1>
            </div>
            <div className='languages'>
                <h1 className='languages-header'>Languages:</h1>
                <p className='languages-desc'>Java, JavaScript, HTML, CSS</p>
            </div>
            <div className='tools'>
                <h1 className='tools-header'>Tools:</h1>
                <p className='tools-desc'>Figma, Gradle, Git, GitHub, VS Code, Eclipse, IntelliJ, Photoshop, Illustrator</p>
            </div>
            <div className='lib-fw'>
                <h1 className='lib-fw-header'>Libraries & Frameworks:</h1>
                <p className='lib-fw-desc'>React, Bootstrap, JavaFX</p>
            </div>
        </div>
    )
}
