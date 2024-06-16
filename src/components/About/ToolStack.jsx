import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SiWindows11, SiVisualstudiocode, SiPostman, SiSlack, SiClickup, SiZoom, SiFilezilla, SiWindowsterminal } from "react-icons/si";

const ToolStack = () => {
    return (
        <section className='py-4'>
            <Container>
                <h2 className='text-center'><strong className='text-pink'>Dev</strong> Tools</h2>
                <Row className='justify-content-center'>
                    <Col xs={4} md={3} className='tech-stack'>
                        <SiWindows11 />
                    </Col>
                    <Col xs={4} md={3} className='tech-stack'>
                        <SiVisualstudiocode />
                    </Col>
                    <Col xs={4} md={3} className='tech-stack'>
                        <SiPostman />
                    </Col>
                    <Col xs={4} md={3} className='tech-stack'>
                        <SiSlack />
                    </Col>
                    <Col xs={4} md={3} className='tech-stack'>
                        <SiClickup />
                    </Col>
                    <Col xs={4} md={3} className='tech-stack'>
                        <SiZoom />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ToolStack