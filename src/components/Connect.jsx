import React from 'react';
import { FaGithub, FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import PropTypes from 'prop-types';
import { MdEmail } from "react-icons/md";

const Connect = ({ alignStart, alignCenter, alignEnd, alignStartLg, alignCenterLg, alignEndLg }) => {
    const ulClassName = `d-flex gap-3 gap-xl-4 list-unstyled mb-0 ${
        alignStart ? 'justify-content-start' :
        alignCenter ? 'justify-content-center' :
        alignEnd ? 'justify-content-end' : ''
    } ${
        alignStartLg ? 'justify-content-lg-start' :
        alignCenterLg ? 'justify-content-lg-center' :
        alignEndLg ? 'justify-content-lg-end' : ''
    }`;

    return (
        <ul className={ulClassName}>
            <li className="social-icons">
                <a
                    href="https://github.com/abdullahdev2K"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour connect-social-icons"
                >
                    <FaGithub />
                </a>
            </li>
            <li className="social-icons">
                <a
                    href="https://www.facebook.com/dev.abdullah2K/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour connect-social-icons"
                >
                    <FaFacebook />
                </a>
            </li>
            <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/devabdullah2k/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour connect-social-icons"
                >
                    <FaLinkedinIn />
                </a>
            </li>
            <li className="social-icons">
                <a
                    href="https://www.instagram.com/dev.abdullah2k/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour connect-social-icons"
                >
                    <FaInstagram />
                </a>
            </li>
            <li className="social-icons">
                <a
                    href="mailto:abdullah2k.dev@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour connect-social-icons"
                >
                    <MdEmail />
                </a>
            </li>
        </ul>
    );
};

Connect.propTypes = {
    alignStart: PropTypes.bool,
    alignCenter: PropTypes.bool,
    alignEnd: PropTypes.bool,
    alignStartLg: PropTypes.bool,
    alignCenterLg: PropTypes.bool,
    alignEndLg: PropTypes.bool,
};

export default Connect;
