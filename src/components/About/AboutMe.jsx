import React from 'react';
import { Container } from 'react-bootstrap';
import Connect from '../Connect';


const AboutMe = () => {
    return (
        <section className='py-4'>
            <Container>
                <h1 className='text-center mb-3'>Meet the <span className='text-pink'>Developer</span></h1>
                <text className='fs-5'>
                    Hello! I'm <span className='text-pink'>Abdullah Irfan</span>, a passionate and dedicated software developer with a background in Computer Science from <span className='text-pink'>Government College University, Lahore</span>. Throughout my academic journey, I have honed my skills in web development, specializing in technologies like <span className='text-pink'>JavaScript, React, Node.js</span>, and <span className='text-pink'>MongoDB</span>. I have practical experience in <span className='text-pink'>PHP</span> and have worked as a <span className='text-pink'>Junior WordPress Developer</span> at Webzeto from 2023 to 2024.
                    <br/><br/>
                    In <span className='text-pink'>2024</span>, I transitioned my focus to <span className='text-pink'>MERN Stack Development</span>, earning certifications in both WordPress and <span className='text-pink'>MERN Stack Development</span>. I am enthusiastic about exploring new technologies and trends in web development.
                    <br/><br/>
                    During my free time, I engage in personal projects, contribute to the tech community, and continuously expand my skills to tackle new challenges in the field.
                    <br/><br/>
                    Feel free to explore my portfolio to learn more about my work. Let's connect if you're interested in collaborating or discussing opportunities!
                    <br/><br/>
                </text>
                <Connect alignCenter={true} />
            </Container>
        </section>
    )
}

export default AboutMe