import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';
import './header.css';

export default (props) => {
  const loggedOut = <><li className="nav-item">
      <Link className="nav-link" to="/signup">Sign Up</Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to="/login">Log In</Link>
    </li></>

  const loggedIn = <><li className="nav-item">
      <Link className="nav-link" to="/logout">Logout</Link>
    </li></>

  return(

    <nav className="wholenave">
<h1>JamPack</h1>

    
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home </Link>
        </li>
        <AuthContext.Consumer>
          {
            user => {
              if (user) return loggedIn
              else return loggedOut
            }
          }
        </AuthContext.Consumer>
      </ul>
    </nav>
  )
}