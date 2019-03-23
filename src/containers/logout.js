import React from 'react';
import firebase from '../firebase';

export default class Logout extends React.Coomponent {

    componentDidMount() {
        firebase.auth().signOut()
    }

    render() {
        
    }
}
