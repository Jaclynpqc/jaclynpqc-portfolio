import React, {useState} from 'react';
import { Card, CardContent} from '@/components/ui/card';

const Skills = () => {
    const [purchasedSkills, setPurchasedSkills] = useState([]);

    const skills = [
        {
            category: 'HUMAN-COMPUTER INTERACTION RESEARCHER',
            company: 'ALLEGHENY COLLEGE', 
            period: '05/2024 - 09/2024',
            items: [
                {name: 'TouchDesigner',
                image: '/src/assets/touchdesigner.webp'
                },
                {
                    name: 'Processing',
                    image: '/src/assets/processing.webp'
                }
            ]
        },
        {
            category: 'WEB DEVELOPER INTERN',
            company: 'BULLMOOSE MARKETING',
            period: '05/2024 - Present',
            items: [
                {
                    name: 'React',
                    image: '/src/assets/react.svg'
                },
                {
                    name: 'Tailwind',
                    image: '/src/assets/tailwind.webp'
                },
                {
                    name: 'Figma',
                    image: '/src/assets/figma.webp'
                },
                {
                    name: 'WordPress',
                    image: ''
                }
            ]
        },
        {
            category: 'SOFTWARE ENGINEER RESEARCHER',
            company: 'ALLEGHENY COLLEGE',
            period: '01/2024 - 08/2024',
            items: [
                {
                    name: 'Python',
                    image: ''
                },
                {
                    name: 'Jupyter Notebook',
                    image: ''
                },
                {
                    name: 'scikit-learn',
                    image: ''
                },
            ]
        },
        {
            category: 'WEB APPLICATION INTERN',
            company: 'FOODTRUCK ASSOCIATION OF CANADA',
            period: '01/2024 - 05/2024',
            items: [
                {
                    name: 'HTML5',
                    image: '/src/assets/html5.webp'
                },
                {
                    name: 'CSS',
                    image: '/src/assets/css.webp'
                },
                {
                    name: 'JavaScript',
                    image: '/src/assets/javascript.webp'
                },
            ]
        },
        {
            category: 'STUDENT DATA ANALYST',
            company: 'ACUTEC PRECISION AEROSPACE',
            period: '11/2023 - 12/2023',
            items: [
                {
                    name: 'Data Visualization',
                    image: ''
                },
                {
                    name: 'SQL',
                    image: '/src/assets/sql.webp'
                }
            ]
        },
        {
            category: 'DIGITAL ART WORKSHOP FOUNDER',
            company: 'Alleghney Lab for Innovation & Creativity',
            period: '05/2023 - 05/2024',
            items: [
                {
                    name: 'Adobe Illustrator',
                    image: '/src/assets/adobeAI.png'
                },
                {
                    name: 'Adobe InDesign',
                    image: ''
                },
                {
                    name: 'Adobe After Effects',
                    image: '/src/assets/adobeAfterEffects.png'
                },
                {
                    name: 'Adobe Premiere Pro',
                    image: ''
                },
                {
                    name: 'Adobe Aero',
                    image: '/src/assets/adobeAero.png'
                },
            ]
        }
    ]
}