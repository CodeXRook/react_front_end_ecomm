import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {

    state = {
        email: '',
        password:'',
        error:''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }
    
    handleSubmit = (e) => {e.preventDefualt();
    }
}
