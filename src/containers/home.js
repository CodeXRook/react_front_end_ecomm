import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default class Home extends React.Component {



    render() {

        
        return (  
            <div className="container">
            <img src={ require('../assets/tmsq.jpg')} className="img-fluid" alt="Responsive image" />
            <div className="overlay">

              <div onClick className="">
              <Link className="text" to='/home'>Enter JamPack</Link>
               </div>
            </div>
            </div>

            
       
        )
    }
}