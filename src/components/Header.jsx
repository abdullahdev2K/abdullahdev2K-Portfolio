import React from "react";
import { Nav, Navbar, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoHomeOutline, IoDocumentTextOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";



const Header = () => {
    return (
        <Navbar expand="lg" className="bg-black py-1">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="text-decoration-none text-white fw-semibold">
                        AI
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className="py-3 px-4">
                        <Link to="/" className="text-decoration-none text-white fw-medium d-flex align-items-center gap-3">
                            <span>
                                <IoHomeOutline style={{ color: 'white' }} />
                            </span>
                            Home
                        </Link>
                    </Nav.Link>
                    <Nav.Link className="py-3 px-4">
                        <Link to="/about" className="text-decoration-none text-white fw-medium d-flex align-items-center gap-3">
                            <span>
                                <FaRegUser style={{color: 'white'}} />
                            </span>
                            About
                        </Link>
                    </Nav.Link>
                    <Nav.Link className="py-3 px-4">
                        <Link to="/projects" className="text-decoration-none text-white fw-medium d-flex align-items-center gap-3">
                            <span>
                                <GrProjects style={{color: 'white'}} />
                            </span>
                            Projects
                        </Link>
                    </Nav.Link>
                    <Nav.Link className="py-3 px-4">
                        <Link to="/resume" className="text-decoration-none text-white fw-medium d-flex align-items-center gap-3">
                            <span>
                                <IoDocumentTextOutline style={{color:'white'}} />
                            </span>
                            Resume
                        </Link>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
