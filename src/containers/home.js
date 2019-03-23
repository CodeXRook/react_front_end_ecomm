import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';

export default class Home extends React.Component {

    render() {
        return (
        <AuthContext.Consumer>
            {
                (user) => {
                    if (user) {
                        return (
                            <>
                            <h2> Welcome back, {user.email} Let's shop </h2>
                        )
                    }
                }
            }
        </AuthContext.Consumer>
        )
    }
}