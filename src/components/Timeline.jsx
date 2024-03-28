// src/components/Timeline.jsx
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline() {
    const timelineItems = [
        {
            title: 'Verisk',
            subtitle: 'Software Support Analyst Co-op',
            date: 'Jan 2024 - Present',
            description: ['Upgrade and install software for external clients and internal groups',
                'Run analysis in order to validate software and assure software is up to quality standards',
                'Collaborate with cross-functional teams to troubleshoot and debug software-related problems',
                'Document meetings and create documentation for software applications']
        },
        {
            title: 'Northeastern University',
            subtitle: 'Office Assistant, Journalism Department',
            date: 'Sep 2023 - Dec 2023',
            description: ['Provided administrative support to the office by efficiently managing requested tasks',
                'Coordinated appointments ensuring timely communication and organization within the department',
                'Managed office supplies, reception duties, greeted visitors, and provided assistance as needed']
        },
        {
            title: 'Starbucks Corporation',
            subtitle: 'Barista',
            date: 'Jan 2021 - Sep 2023',
            description: ['Issued exceptional customer service by greeting, assisting, and engaging with customers',
                'Collaborated with team members to maintain a smooth workflow during peak hours, contributing to an efficient work environment']
        }
    ];

    let icons = [
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <a href="https://www.verisk.com/" target="_blank" rel='noreferrer'>
                <img src='https://companieslogo.com/img/orig/VRSK-5db4d89e.png?t=1649106626' style={{ width: '40px', height: '40px', borderRadius: '50%' }} alt='Verisk Logo' />
            </a>
        </div>,
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <a href="https://www.northeastern.edu/" target="_blank" rel='noreferrer'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Northeastern_seal.svg/150px-Northeastern_seal.svg.png' style={{ width: '40px', height: '40px', borderRadius: '50%' }} alt='NEU Seal' />
            </a>
        </div>,
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <a href="https://www.starbucks.com/" target="_blank" rel='noreferrer'>
                <img src='https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1017px-Starbucks_Corporation_Logo_2011.svg.png' style={{ width: '40px', height: '40px', borderRadius: '50%' }} alt='Starbucks Logo' />
            </a>
        </div>
    ]

    let color = ['#73478E', '#543368', '#39184D']
    return (
        <>
            <h1 class='text-4xl flex items-center justify-center'>Experience</h1>
            <div className='mx-auto'>
                <VerticalTimeline>
                    {timelineItems.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            date={<div className='mx-4' style={{ color: 'black' }}>{item.date}</div>}
                            contentStyle={{ borderRadius: '15px', background: color[index % 3], color: 'white' }}
                            contentArrowStyle={{ borderRight: `7px solid ${color[index % 3]}` }}
                            iconStyle={{ background: color[index % 3], color: '#000' }}
                            icon={icons[index]}
                        >
                            <h3 className='vertical-timeline-element-title' style={{ fontWeight: 'bold' }}>{item.title}</h3>
                            <h4 className='vertical-timeline-element-subtitle' style={{ fontStyle: 'italic' }}>{item.subtitle}</h4>

                            <ul>
                                {item.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>

                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div >
        </>
    );
}

