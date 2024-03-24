// src/pages/Home.jsx
import React from 'react';
import SocialMediaIcons from '../components/SocialMediaIcons';

export default function Home() {
    return (
        <div id="home">
            <div id="home-intro">
                <h1>Hi! I'm Caroline!</h1>
                <h2>Candidate for B.S. in Computer Science and Design</h2>
                <div>
                    <SocialMediaIcons />
                </div>
            </div>
        </div>
    )
}