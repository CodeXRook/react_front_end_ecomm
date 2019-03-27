import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import firebase from './firebase';



//-----PAGES
import Header from './components/header';
import Home from './containers/home';
import Signup from './containers/signup';
import Login from './containers/login';
import Logout from './containers/logout';
import Error404 from './components/error404';
import Cart from '/.components/cart';
import Shopprofile from '/.components/shopprofile';
import Listorders from '/.components/listorders';
import Checkout from '/.components/checkout';
import Viewproduct from '/.components/viewproduct';

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
                            <Route path='/' exact component ={ Home } />
                            <Route path='/signup' exact component ={ Signup } />
                            <Route path='/login' exact component= { Login } />
                            <Route path ='/logout' exact component={ Logout } />
                            <Route path='/shopprofile' exact component={ Shopprofile } />
                            <Route path='/viewproduct' excat component={ Viewproduct } />
                            <Route path='/cart' exact component={ Cart } />
                            <Route path='/checkout' exact component={ Checkout } />
                            <Route path='/createproduct' exact component={  Createproduct } />
                            <Route pathh='/Listorders' exact component ={ Listorders } />
                            <Route component={ Error404 } />
                        </Switch>
                    </div>
                </AuthContext.Provider>
            </HashRouter>
            
        );
    }
}

export default App;