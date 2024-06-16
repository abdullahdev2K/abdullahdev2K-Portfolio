import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Connect from './Connect';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // getting current year
    return (
        <>
            <footer className='bg-black py-5'>
                <Container>
                    <Row className='align-items-center'>
                        <Col>
                            Copyright © {currentYear} <span className='text-pink'>AI</span>. All Rights Reserved.
                        </Col>
                        <Col className='text-center'>
                            Designed by <span className='text-pink'>Abdullah Irfan</span>
                        </Col>
                        <Col>
                            <Connect alignEnd={true} />
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer