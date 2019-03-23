import React from 'react';

export default class CreateProfile extends React.Component {

    state = {
        email:'',
        password:'',
        error:''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                console.log('Returns: ', response);
            })
            .catch(err => {
                const { message } = err;
                this.setState({ error: message });
            })
    }

    render(){

        const {email, pawssword, error } = this.state;
        const displayeError = error === '' ? '' : <div className="alert alert-danger" roler="alert">{error}</div>
        const form = <>
        <h1> Sign Up </h1>
        {displayError}

        
    }
}