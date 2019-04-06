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
        const products = localStorage.getItem('cart') || [];
        this.setState({ products},()=>{
            console.log('state after local storage',this.state);
        });
    }
    
    render(){
        return(
            <>
            <h1> You Cart Is Empty </h1>
            <h2>Checkout</h2>
            </>
        );
    }
}
    export default Cart;