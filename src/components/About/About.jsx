import React from 'react';
import AboutMe from './AboutMe';
import TechStack from './TechStack';
import ToolStack from './ToolStack';
import Education from './Education';

const About = () => {
    return (
        <>
            <AboutMe />
            <hr />
            <Education />
            <hr />
            <TechStack />
            <hr />
            <ToolStack />
        </>
    )
}

export default About