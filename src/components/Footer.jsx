// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
    return (
        <footer style={{ textAlign: 'left', padding: '20px', width: '100%', backgroundColor: 'white' }}>
            &copy; {new Date().getFullYear()} Caroline Pham
        </footer>
    );
}