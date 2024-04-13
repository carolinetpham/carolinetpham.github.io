// src/pages/Skills.jsx
import React from 'react';
import Image from 'react-bootstrap/Image';
export default function Skills() {
    const skills = [{
        category: 'Languages',
        items: [
            { logo: '/pictures/java-logo.png', alt: 'Java Logo', name: 'Java' },
            { logo: '/pictures/javascript-logo.png', alt: 'JavaScript Logo', name: 'JavaScript' },
            { logo: '/pictures/html-logo.png', alt: 'HTML Logo', name: 'HTML' },
            { logo: '/pictures/css-logo.png', alt: 'CSS Logo', name: 'CSS' }
        ]
    },
    {
        category: 'Tools',
        items: [
            { logo: '/pictures/figma-logo.png', alt: 'Figma Logo', name: 'Figma' },
            { logo: '/pictures/gradle-logo.png', alt: 'Gradle Logo', name: 'Gradle' },
            { logo: '/pictures/git-logo.png', alt: 'Git Logo', name: 'Git' },
            { logo: '/pictures/github-logo.png', alt: 'GitHub Logo', name: 'GitHub' },
            { logo: '/pictures/vs-code-logo.png', alt: 'VS Code Logo', name: 'VS Code' },
            { logo: '/pictures/eclipse-logo.png', alt: 'Eclipse Logo', name: 'Eclipse' },
            { logo: '/pictures/intellij-logo.png', alt: 'IntelliJ Logo', name: 'IntelliJ' },
            { logo: '/pictures/photoshop-logo.png', alt: 'Photoshop Logo', name: 'Photoshop' },
            { logo: '/pictures/illustrator-logo.png', alt: 'Illustrator Logo', name: 'Illustrator' }
        ]
    },
    {
        category: 'Libraries and Frameworks',
        items: [
            { logo: '/pictures/react-logo.png', alt: 'React Logo', name: 'React' },
            { logo: '/pictures/bootstrap-logo.png', alt: 'Bootstrap Logo', name: 'Bootstrap' },
            { logo: '/pictures/junit5-logo.png', alt: 'JUnit Logo', name: 'JUnit' },
            { logo: '/pictures/javafx-logo.png', alt: 'JavaFX Logo', name: 'JavaFX' }
        ]
    }];

    const SkillItem = ({ item }) => (
        <div className="logo-container">
            <Image src={item.logo} alt={`${item.name} Logo`} className="logo" />
            <p>{item.name}</p>
        </div>
    );

    return (
        <div id='skills'>
            <div className='skills-title'>
                <h1>Technical Skills</h1>
            </div>
            <div className='skills-description'>
                {skills.map((skill, index) => (
                    <div key={index}>
                        <h1 className={`${skill.category.toLowerCase().replace(/ /g, '-')}-title`}>{skill.category}:</h1>
                        <div className={`category ${skill.category.toLowerCase().replace(/ /g, '-')}`}>
                            {skill.items.map((item, index) => (
                                <SkillItem key={index} item={item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
