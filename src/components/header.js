import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';

export default (props) => {
    const loggedOut = <> <li className="nav-item">
        <Link className="nav-link" to="/createprofile">Sign Up Now </Link>
    </li>
    <li claasName="nav-item">
    <Link className="nav-link" to= "/login">Sign In</Link>   
    </li></>

    const loggedIn =<> <li className="nav-item">
    <Link className ="nav-link" to="/logout"> Sign Out </Link>
    </li></>

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">JamPack</Link>
        <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to="/"> Home </Link>
        </li>
        <AuthContext.Consumer>
            {
                user =>{
                    if (user) return loggedIn
                    else return loggedOut
                }
            }
        </AuthContext.Consumer>
        </ul>
        </nav>
    )
}
