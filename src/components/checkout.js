import React from 'react';
import {Link} from 'react-router-dom';

class Checkout extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            products: [],
        }
    }

    render(){
        return(
            <>
            <h1>View product</h1>
            <h2> continue shopping</h2>
            </>
        );
    }
    
}
    export default Checkout;