// src/pages/Home.jsx
import React from 'react';
import SocialMediaIcons from '../components/SocialMediaIcons';

export default function Home() {
    return (
        <div id='home'>
            <div id='home-container'>
                <div id='home-intro'>
                    <h1 className='name'>Hi! I'm Caroline :)</h1>
                    <h2 className='major'>Candidate for B.S. in Computer Science and Design</h2>
                    <div>
                        <SocialMediaIcons />
                    </div>
                </div>
            </div>
        </div>
    )
}