import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const textColor = `text-${props.mode === 'light' ? 'dark' : 'light'}`;

    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} ${textColor} sticky-top`}>
            <div className="container-fluid">
                <Link className={`navbar-brand ${textColor}`} to="/">
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className={`nav-link active ${textColor}`}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className={`nav-link ${textColor}`}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className={`nav-link dropdown-toggle ${textColor}`}
                                href="/"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="/">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input
                            onClick={props.toggleMode}
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                            {props.mode} Mode
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
// };

Navbar.defaultProps = {
    title: 'Set the title as string carefully',
};
