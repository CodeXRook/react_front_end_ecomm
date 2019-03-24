import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';
 
export default class CreateProfile extends React.Component {

    state = {
        email: '',
        password: '',
        error: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
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

    render() {

        const { email, pawssword, error } = this.state;
        const displayError = error === '' ? '' : <div className="alert alert-danger" roler="alert">{error}</div>
        const displayForm = <>
            <h1> Sign Up </h1>
            {displayError}
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail">Email</label>
                    <input type="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" placeholder="Password" value={password} name="password" onChange={this.hanleChange} />
                </div>
                <button type="password" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button>
            </form>
        </>;

        return (
            <AuthContext.Consumer>
                {
                    user => {
                        if (user) {
                            return <Redirect to='/'></Redirect>
                        } else {
                            return displayForm;
                        }
                    }
                }
            </AuthContext.Consumer>
        );

    }
}