import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';

export default (props) => {
    const loggedOut = <> <li className="nav-item">
        <Link className="nav-link" to="/createprofile">Sign Up Now </Link>
    </li>
    <li claasName="nav-item">
    <Link className="nav-link" to= "/login">Sign out</Link>   
    </li>
}
