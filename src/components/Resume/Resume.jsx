import React from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Link } from 'react-router-dom';

const Resume = () => {
    const downloadCv = () => {
        const downloadUrl = '/AbdullahIrfan-CV.pdf';
        window.open(downloadUrl);
    };

    return (
        <section className='py-5'>
            <Container>
                <Row className='justify-content-center'>
                    <Col>
                        <h1>Download CV or View My Works</h1>
                        <div className='d-flex gap-3 align-items-center my-4'>
                            <div>
                                <Button className='custom-btn border-0 rounded' onClick={downloadCv}>Download CV</Button>
                            </div>
                            <div>
                                <Link to="/projects">
                                    <Button className='custom-btn border-0 rounded'>
                                        View My Works
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                            <Viewer fileUrl="/AbdullahIrfan-CV.pdf" />
                        </Worker>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Resume;
