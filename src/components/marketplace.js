import React from 'react';

class MarketPlace extends React.Component{
    constructor(props){
        super (props);

        this.state ={
            input:'',

            products: [{
                id: 2,
                name:'',
                shop_id: 1,
                price: 100,
                description: 'jeans'
            }],
            cart: []
        }
    }

handleCartClick = (e) => {
    const newCart = this.state.cart.concat(this.state.products[e.target.id])
    console.log('this is newCart', newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
    this.setState( { cart:newCart}, () =>{
        console.log(this.state)
    })
}

    render(){
        return (
<>
            <h1> <button id="0" onClick={this.handleCartClick}> Add to Cart </button>
            Welcome To MarketPlace </h1>


<div class="gallery">

<a target="_blank" href="img_5terre.jpg">
  <img src={ require('../assets/tmsq.jpg')} alt="Cinque Terre" width="600" height="400"/>
</a>

<div class="desc">Add a description of the image here</div>

</div>

<div class="gallery">
<a target="_blank" href="img_forest.jpg">
  <img src="img_forest.jpg" alt="Forest" width="600" height="400"/>
</a>
<div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
<a target="_blank" href="img_lights.jpg">
  <img src="img_lights.jpg" alt="Northern Lights" width="600" height="400"/>
</a>
<div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
<a target="_blank" href="img_mountains.jpg">
  <img src="img_mountains.jpg" alt="Mountains" width="600" height="400"/>
</a>

<div class="desc">Add a description of the image here</div>
</div>

      </>    

        );
    }
}
export default MarketPlace;