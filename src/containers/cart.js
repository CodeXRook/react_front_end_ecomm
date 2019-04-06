import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            products: [],
        }
    }
//NEED TO CHECK DATAF FROM APP
    componentDidMount(){
        const products = localStorage.getItem('cart');
        this.setState({ products:products });
    }
    
    render(){
        return(
            <h1> You Cart Is Empty </h1>
        );
    }
}
    export default Cart;