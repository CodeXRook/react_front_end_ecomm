import React from 'react';
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';


//-----PAGES
import Home from './components/home';
import CreateProfile from './containers/createprofile';



class App extends Component {

    state ={
        user:null,
    }

    componentDidMount = () => {
        this.unsubscribe = Firebase.auth().onAuthStateChange(user => {
            if (user) {
                this.state
            }
        })
    }

    render(){
        return(
            <HashRouter>
                <AuthContext.Provider value ={this.state.user}>
                    <Route path='/' component={ Header }/>
                    <div className='container mt-5'>
                        <Switch>
                            <Route path='/' excat component ={ Home } />
                            <Route path='/createprofile' exact component { CreateProfile } />
                        </Switch>
                    </div>
                </AuthContext.Provider>
            </HashRouter>
            
        );
    }
}

export default App;