import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import {Button, Col, Container, Row} from 'react-bootstrap';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ProfileImage from '../../assets/images/Abdullah.jpg';
import Connect from '../Connect';
import { Link } from 'react-router-dom';

const Home = () => {
    const [text] = useTypewriter({
        words: [ 'Abdullah Irfan', 'a MERN Stack Developer', 'a WordPress Developer', 'an Elementor Expert'],
        loop: true,
    });

    return (
        <section className='py-5'>
            <Container>
                <Row className='py-2 align-items-center'>
                    <Col>
                        <h2 className='mb-3'>
                            Hi There!
                            <span className="wave" role="img" aria-labelledby="wave">
                                👋🏻
                            </span>
                        </h2>
                        <h1 className='mb-3'>
                            I'm <span className='colored-heading fw-bolder'>{text}</span>
                            <Cursor />
                        </h1>
                        <p className='fs-5 mb-3'>based in Lahore, Pakistan.</p>
                        <div className='d-flex gap-3 align-items-center mb-4'>
                            <div>
                                <Link to="/projects">
                                    <Button className='custom-btn border-0 rounded'>
                                        View My Works
                                    </Button>
                                </Link>
                            </div>
                            <div>
                                <Link to="/resume" >
                                    <Button className='custom-btn2 border-0'>
                                        View My Resume <FaRegArrowAltCircleRight />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <p>
                            Feel free to <span className="text-pink">connect </span>with me
                        </p>
                        <Connect/>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <div className='bg-light rounded-circle p-3'>
                            <img src={ProfileImage} alt="Abdullah Irfan" className='img-fluid rounded-circle object-fit-cover' style={{ width: '400px', height: '400px' }} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home