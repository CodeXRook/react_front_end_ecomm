import React from 'react';
import {Link} from 'react-router-dom';

class ViewProduct extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            products: {
                id: 2,
                name:'',
                shop_id: 1,
                price: 100,
                description: 'jeans'
            }
        }
    }

    putInCart= (e) => {
        const currentCart = JSON.parse(localStorage.getItem('cart'));
        const newCart = currentCart.concat(this.state.product);
        localStorage.setItem('cart',JSON.stringify(newCart));
         console.log(newCart);
        }

     render(){
        return(
       <>
      
            <button id="0" onClick={this.handleputInCart}> Add to Cart </button>
     
            <button id="0" onClick={this.handleputInCart}> Add to Cart </button> 

            <button id="0" onClick={this.handleputInCart}> Add to Cart </button>  
      </>
         );
     }
    
}
    export default ViewProduct;
