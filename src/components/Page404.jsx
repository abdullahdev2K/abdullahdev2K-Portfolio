import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';

const Page404 = () => {
    return (
        <section className='py-4'>
            <Container>
                <Row className='justify-content-center'>
                    <h1 className='text-center'><span className='text-pink'>404</span> Page Not Found</h1>
                    <p className='text-center'>Sorry, the page you are looking for does not exist.</p>
                    <div className='text-center'>
                        <Button href='/' className='custom-btn border-0'>Back to Home</Button>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Page404