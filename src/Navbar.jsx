import React ,{ Component } from "react";
import { Link } from "react-router-dom";
import { RiGithubFill} from "@remixicon/react";
import PropTypes from 'prop-types';

const Navbar = ({title = "Github Finder"}) => {
    
    return (
        <nav className="navbar bg-danger d-flex justify-content-space-between align-items-center px-4 py-2">
            <Link to="/" className="navbar-brand d-flex align-items-center justify-content-center gap-2"> <RiGithubFill /> {title}</Link>
            <div className="d-flex align-items-center justify-content-center gap-4">
                <Link to="/" className="nav-item nav-link">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
}

export default Navbar