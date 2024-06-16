import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import PropTypes from 'prop-types';
import { Col } from "react-bootstrap";
import "../../assets/styles/app.css";

function ProjectCards(props) {
    return (
        <Col md={12} lg={6}>
            <Card className="project-card-view position-relative">
                <Card.Body>
                    <div className="project_type rounded">{props.type}</div>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text style={{ textAlign: "justify" }}>
                        {props.description}
                    </Card.Text>
                    <Button className="custom-btn border-0" href={props.githubLink} target="_blank">
                        <BsGithub /> Github
                    </Button>

                    <Button className="custom-btn border-0" href={props.demoLink} target="_blank" style={{ marginLeft: "10px" }}>
                    <CgWebsite /> &nbsp;
                        Demo
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

ProjectCards.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    githubLink: PropTypes.string,
    demoLink: PropTypes.string
};

export default ProjectCards;