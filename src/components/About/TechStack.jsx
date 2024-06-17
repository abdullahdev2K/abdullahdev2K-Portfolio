import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DiHtml5, DiCss3Full, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiGithubFull, DiPhp, DiMysql, DiWordpress, DiBootstrap } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";


const TechStack = () => {
    return (
        <section className='py-4'>
            <Container>
                <h2 className='text-center'><strong className='text-pink'>Tech</strong> Stack</h2>
                <Row className='justify-content-center'>
                    <Col xs={4} md={2} className='tech-stack'>
                        <DiHtml5 />
                    </Col>
                    <Col xs={4} md={2} className='tech-stack'>
                        <DiCss3Full />
                    </Col>
                    <Col xs={4} md={2} className='tech-stack'>
                        <DiBootstrap />
                    </Col>
                    <Col xs={4} md={2} className='tech-stack'>
                        <SiTailwindcss />
                    </Col>
                    <Col xs={4} md={2} className='tech-stack'>
                        <DiJavascript1 />
                    </Col>
                    <Col xs={4} md={2} className='tech-stack'>
                        <DiReact />
                    </Col>
                    <Col xs={4} md={2} className='tech-stack'>
                        <DiNodejs />
                    </Col>
                    <Col xs={4} md={2} className='tech-stack'>
                        <DiMongodb />
                    </Col>
                    <Col xs={4} md={2} className='tech-stack'>
                        <DiGit />
                    </Col>
                    <Col xs={4} md={2} className='tech-stack'>
                        <DiGithubFull />
                    </Col>
                    <Col xs={4} md={2} className='tech-stack'>
                        <DiWordpress />
                    </Col>
                    <Col xs={4} md={2} className='tech-stack'>
                        <DiPhp />
                    </Col>
                    <Col xs={4} md={2} className='tech-stack'>
                        <DiMysql />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TechStack