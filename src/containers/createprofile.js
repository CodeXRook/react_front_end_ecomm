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
    }
}