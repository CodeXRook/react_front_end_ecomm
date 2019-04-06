import React from 'react';
import  './marketplace.css';

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
            <h1>Welcome To MarketPlace </h1>


<div class="gallery">

<a target="_blank" href="img_5terre.jpg">

  <img src={ require('../assets/2k19.jpeg')} alt="Cinque Terre" width="50" height="50"/>
  
</a>

<div class="desc"> NBA 2K19 </div>
<button id="0" onClick={this.handleCartClick}> Add to Cart </button>

</div>

<div className="gallery">
<a target="_blank" href="img_forest.jpg">
  <img src={ require('../assets/StateOfDecay.jpeg')} alt="Forest" width="60" height="40"/>
</a>
<div className="desc"> State Of Decay </div>
</div>

<div className="gallery">
<a target="_blank" href="img_lights.jpg">
  <img src={ require('../assets/spiderMan.jpeg')} alt="Northern Lights" width="50" height="40"/>
</a>
<div className="desc">Spider Man</div>
</div>

<div class="gallery">
<a target="_blank" href="img_mountains.jpg">
  <img src={require('../assets/Ghost.jpeg')} alt="Mountains" width="60" height="40"/>
</a>
<div className="desc"> GHOST </div>
</div>

<div class="gallery">
<a target="_blank" href="img_forest.jpg">
  <img src={ require('../assets/fallOut4.jpeg')} alt="Forest" width="60" height="40"/>
</a>
<div class="desc"> State Of Decay </div>
</div>

      </>    

        );
    }
}
export default MarketPlace;