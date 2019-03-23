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
        this.setState ({ [e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
            console.log('Returns: ', response);
        })
        .catch(err => {
            const { message } = err;
            this.setState({ error: message });
        }) 
    }

    render() {
        const { email, password, error } = this.state;
        const displayError =error === '' ? '' : <div className="alert alert-danger" role="alert">{error}</div>
        const displayForm = <>
        <h1> Login </h1>
        {displayError}
        <form>
            <div className="form-group">
            <label htmlFor="exampleInputEmail"> Email </label>
            <input type="email" className="form-control" aria-describedy="emailHelp" placeholder="Enter email" name="email" value= {email} onChabge={this.handleChange} />

            </div>
        </form>
        </>;

        return(
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return <Redirect to='/' />
                        } else{
                            return displayForm;
                        }
                    }
                }
            </AuthContext.Consumer>
        )
    }
}
