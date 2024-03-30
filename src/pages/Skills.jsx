// src/pages/Skills.jsx
import React from 'react';
import Image from 'react-bootstrap/Image';
export default function Skills() {
    return (
        <div id='skills'>
            <div className='skills-title'>
                <h1>Technical Skills</h1>
            </div>
            <h1 className='languages-title'>Languages: </h1>
            <div className='languages'>
                <div className="logo-container">
                    <Image src={'/pictures/java-logo.png'} alt='Java Logo' className='java-logo' />
                    <p>Java</p>
                </div>
                <div className="logo-container">
                    <Image src={'/pictures/javascript-logo.png'} alt='JavaScript Logo' className='javascript-logo' />
                    <p>JavaScript</p>
                </div>
                <div className="logo-container">
                    <Image src={'/pictures/html-logo.png'} alt='HTML Logo' className='html-logo' />
                    <p>HTML</p>
                </div>
                <div className="logo-container">
                    <Image src={'/pictures/css-logo.png'} alt='CSS Logo' className='css-logo' />
                    <p>CSS</p>
                </div>
            </div>
            <h1 className='tools-title'>Tools: </h1>
            <div className='tools'>
                <div className="logo-container">
                    <Image src={'/pictures/figma-logo.png'} alt='Figma Logo' className='figma-logo' />
                    <p>Figma</p>
                </div>
                <div className="logo-container">
                    <Image src={'/pictures/gradle-logo.png'} alt='Gradle Logo' className='gradle-logo' />
                    <p>Gradle</p>
                </div>
                <div className="logo-container">
                    <Image src={'/pictures/git-logo.png'} alt='Git Logo' className='git-logo' />
                    <p>Git</p>
                </div>
                <div className="logo-container">
                    <Image src={'/pictures/github-logo.png'} alt='GitHub Logo' className='github-logo' />
                    <p>GitHub</p>
                </div>
                <div className="logo-container">
                    <Image src={'/pictures/vs-code-logo.png'} alt='VS Code Logo' className='vs-code-logo' />
                    <p>VS Code</p>
                </div>
                <div className="logo-container">
                    <Image src={'/pictures/eclipse-logo.png'} alt='Eclipse Logo' className='eclipse-logo' />
                    <p>Eclipse</p>
                </div>
                <div className="logo-container">
                    <Image src={'/pictures/intellij-logo.png'} alt='IntelliJ Logo' className='intellij-logo' />
                    <p>IntelliJ</p>
                </div>
                <div className="logo-container">
                    <Image src={'/pictures/photoshop-logo.png'} alt='Photoshop Logo' className='photoshop-logo' />
                    <p>Photoshop</p>
                </div>
                <div className="logo-container">
                    <Image src={'/pictures/illustrator-logo.png'} alt='Illustrator Logo' className='illustrator-logo' />
                    <p>Illustrator</p>
                </div>
            </div>
            <h1 className='lib-fw-title'>Libraries & Frameworks: </h1>
            <div className='lib-fw'>
                <div className="logo-container">
                    <Image src={'/pictures/react-logo.png'} alt='React Logo' className='react-logo' />
                    <p>React</p>
                </div>
                <div className="logo-container">
                    <Image src={'/pictures/bootstrap-logo.png'} alt='Bootstrap Logo' className='bootstrap-logo' />
                    <p>Bootstrap</p>
                </div>
                <div className="logo-container">
                    <Image src={'/pictures/junit5-logo.png'} alt='JUnit Logo' className='junit-logo' />
                    <p>JUnit</p>
                </div>
                <div className="logo-container">
                    <Image src={'/pictures/javafx-logo.png'} alt='JavaFX Logo' className='javafx-logo' />
                    <p>JavaFX</p>
                </div>
            </div>
        </div>
    )
}
