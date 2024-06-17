import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import ProjectCards from './Project_Card';

const Projects = () => {
    return (
        <section className='py-3 py-md-5'>
            <Container>
                <h1 className='mb-3'>Projects</h1>
                <p>
                    Welcome to my projects page! While there are no projects to showcase at the moment,
                    I'm actively working on developing new ideas and initiatives. Check back soon for updates!
                </p>
                <p>
                    In the meantime, feel free to connect with me via email or LinkedIn to learn more about my background
                    and discuss potential opportunities for collaboration.
                </p>
                <p>
                    Thank you for visiting, and I look forward to sharing my future projects with you.
                </p>
                <Link to="/">
                    <Button className='custom-btn border-0 rounded'>
                        Back to Home
                    </Button>
                </Link>
                {/* <Row className='row-gap-4'>
                    <ProjectCards title={"Hello This is A React Project"} description={"World"} type={"React"} githubLink={"https://www.linkedin.com/in/devabdullah2k/"} />
                    <ProjectCards title={"Pharmacy Management System"} description={"World"} type={"MERN"} githubLink={"https://www.linkedin.com/in/devabdullah2k/"} />
                    <ProjectCards title={"Pharmacy Management System"} description={"World"} type={"MERN"} githubLink={"https://www.linkedin.com/in/devabdullah2k/"} />
                    <ProjectCards title={"Pharmacy Management System"} description={"World"} type={"MERN"} githubLink={"https://www.linkedin.com/in/devabdullah2k/"} />
                    <ProjectCards title={"Pharmacy Management System"} description={"World"} type={"MERN"} githubLink={"https://www.linkedin.com/in/devabdullah2k/"} />
                    <ProjectCards title={"Pharmacy Management System"} description={"World"} type={"MERN"} githubLink={"https://www.linkedin.com/in/devabdullah2k/"} />
                    <ProjectCards title={"Hello"} description={"World"} type={"MERN"} githubLink={"https://www.linkedin.com/in/devabdullah2k/"} />
                    <ProjectCards title={"Hello"} description={"World"} type={"MERN"} githubLink={"https://www.linkedin.com/in/devabdullah2k/"} />
                </Row> */}
            </Container>
        </section>
    )
}

export default Projects