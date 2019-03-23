import React from 'react';
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';


class App extends Component {



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