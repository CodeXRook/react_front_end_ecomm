import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';

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

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div class="dropdown">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      JamPack
 </button>
 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>

       </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
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