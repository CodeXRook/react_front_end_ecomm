import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';


export default (props) => {
  const loggedOut = 

  <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5> <Link className="nav-link" to="/">J amPack </Link> </h5>
      <span> <Link className="nav-link" to="/signup">Sign Up</Link> 
      <Link className="nav-link" to="/login">Log In</Link>
      <Link className="nav-link" to="/logout">Logout</Link>
      </span>
<input placeholder="search "></input>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
    

  const loggedIn = <><li className="nav-item">
      <Link className="nav-link" to="/logout">Logout</Link>
    </li>
  
    </>

  return(
<>

        <AuthContext.Consumer>
          {
            user => {
              if (user) return loggedIn
              else return loggedOut
            }
          }
        </AuthContext.Consumer>
        </>
  )
}