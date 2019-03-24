import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import firebase from './firebase';



//-----PAGES
import Header from './components/header';
import Home from './containers/home';
import CreateProfile from './containers/createprofile';
import Login from './containers/login';
import Logout from './containers/logout';
import Error404 from './components/error404';

// ---- CONTEXTS
import AuthContext from './contexts/auth';

class App extends Component {

    state = {
        user: null
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
             else {
                this.setState({ user: null })
            }
        })
    }

    componentWillUnmount () { 
        this.unsubscribe()
    }

    render() {
        return (
            <HashRouter>
                <AuthContext.Provider value ={this.state.user}>
                    <Route path='/' component={ Header }/>
                    <div className='container mt-5'>
                        <Switch>
                            <Route path='/' excat component ={ Home } />
                            <Route path='/createprofile' exact component ={ CreateProfile } />
                            <Route path='/login' exact component= { Login } />
                            <Route path ='/logout' exact component={ Logout} />
                            <Route component={ Error404 } />
                        </Switch>
                    </div>
                </AuthContext.Provider>
            </HashRouter>
            
        );
    }
}

export default App;