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
import Cart from './components/cart';
import ShopProfile from './components/shopprofile';
import ListOrders from './components/listorders';
import Checkout from './components/checkout';
import ViewProduct from './components/viewproduct';
import CreateProduct from './components/createproduct';
import MarketPlace from '/'

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
                            <Route path ='/marketplace' exact component ={MarketPlace}/>
                            <Route path='/signup' exact component ={ Signup } />
                            <Route path='/login' exact component= { Login } />
                            <Route path ='/logout' exact component={ Logout } />
                            <Route path='/shopprofile' exact component={ ShopProfile } />
                            <Route path='/viewproduct' excat component={ ViewProduct } />
                            <Route path='/cart' exact component={ Cart } />
                            <Route path='/checkout' exact component={ Checkout } />
                            <Route path='/createproduct' exact component={  CreateProduct } />
                            <Route pathh='/listorders' exact component ={ ListOrders } />
                            <Route component={ Error404 } />
                        </Switch>
                    </div>
                </AuthContext.Provider>
            </HashRouter>
            
        );
    }
}

export default App;