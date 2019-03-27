import React from 'react';
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
                            <h2> Welcome back, Let's shop , {user.email}</h2>
                            <h4> Your Shoping tag is: {user.uid}</h4>
                            </>
                        )
                    } else {
                        return (
                            <>
                            <h2> Welcome back, Let's shop </h2>
                            <h2> You are not logged in </h2>
                            </>
                        )
                    }
                }
            }
        </AuthContext.Consumer>
        )
    }
}