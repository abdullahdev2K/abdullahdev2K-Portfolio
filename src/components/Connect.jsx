import React from 'react';
import { FaGithub, FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import PropTypes from 'prop-types';
import { MdEmail } from "react-icons/md";

const Connect = ({ alignCenter, alignEnd }) => {

    const ulClassName = `d-flex gap-4 list-unstyled mb-0 ${
        alignCenter ? 'justify-content-center' : alignEnd ? 'justify-content-end' : ''
    }`;

    return (
        <ul className={ulClassName}>
            <li className="social-icons">
                <a
                    href="https://github.com/abdullahdev2K"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                    <FaGithub />
                </a>
            </li>
            <li className="social-icons">
                <a
                    href="https://www.facebook.com/dev.abdullah2K/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                    <FaFacebook />
                </a>
            </li>
            <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/devabdullah2k/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                    <FaLinkedinIn />
                </a>
            </li>
            <li className="social-icons">
                <a
                    href="https://www.instagram.com/dev.abdullah2k/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                    <FaInstagram />
                </a>
            </li>
            <li className="social-icons">
                <a
                    href="mailto:abdullah2k.dev@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                    <MdEmail />
                </a>
            </li>
        </ul>
    )
}

Connect.propTypes = {
    alignCenter: PropTypes.bool,
    alignEnd: PropTypes.bool,
};

export default Connect