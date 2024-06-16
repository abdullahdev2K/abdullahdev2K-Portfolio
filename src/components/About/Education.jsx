import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Education = () => {
    return (
        <section className='py-4'>
            <Container>
                <Row className='justify-content-between'>
                    <Col md={5}>
                        <h2 className='mb-4'>Education</h2>
                        <ul className='list-unstyled'>
                            <li>
                                <strong className='text-pink'>Bachelor's in Computer Science</strong> from Government College University, Lahore (2019-2023)
                            </li>
                            <li>
                                <strong className='text-pink'>Intermediate (Fsc. Pre-Eng)</strong> from Forman Christian College, Lahore (2017-2019)
                            </li>
                            <li>
                                <strong className='text-pink'>Matric (Comp Sci)</strong> from The Educators, Lahore (2015-2017)
                            </li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <h2 className='mb-4'>Certifications</h2>
                        <ul className='list-unstyled'>
                            <li>
                                <strong className='text-pink'>WordPress Development</strong> from NextAge Solutions, Lahore
                            </li>
                            <li>
                                <strong className='text-pink'>MERN Stack Development</strong> from PNY, Lahore
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Education