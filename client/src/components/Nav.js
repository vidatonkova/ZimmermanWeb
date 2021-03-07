import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className = "header" >
            <div className={"nav-items"}>
                <Link className = "nav-link" to='/Home'>HOME</Link>
                <Link className = "nav-link" to='/My_Health'>My Health</Link>
            </div>
        </div>
    )
};

export default NavBar;