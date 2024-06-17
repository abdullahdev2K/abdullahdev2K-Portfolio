import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Connect from './Connect';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // getting current year
    return (
        <>
            <footer className='bg-black py-5'>
                <Container>
                    <Row className='align-items-center justify-content-between justify-content-lg-start row-gap-5 row-gap-lg-0'>
                        <Col md={5} lg={4} className='text-center text-md-start'>
                            Copyright © {currentYear} <span className='text-pink'>AI</span>. All Rights Reserved.
                        </Col>
                        <Col md={5} lg={4} className='text-center'>
                            Designed by <span className='text-pink'>Abdullah Irfan</span>
                        </Col>
                        <Col md={12} lg={4}>
                            <Connect alignCenter={true} alignEndLg={true} />
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer