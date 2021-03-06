import React from 'react';
import './marketplace.css';

class MarketPlace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',

      products: [{
        id: 2,
        name: '',
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
    localStorage.setItem('cart', JSON.stringify(newCart));
    this.setState({ cart: newCart }, () => {
      console.log(this.state)
    })
  }

  render() {
    return (
     <>

        <h1> Welcome To MarketPlace </h1>

     <div>
          <p> Game Marketplace </p>
          <div className="gallery">
            <a target="_blank" href="img_5terre.jpg">

              <img src={require('../assets/2k19.jpeg')} alt="Cinque Terre" width="50" height="50" />
            </a>
            <div className="desc"> NBA 2K19 </div>

          </div>

          <div className="gallery">
            <a target="_blank" href="img_forest.jpg">
              <img src={require('../assets/StateOfDecay.jpeg')} alt="Forest" width="60" height="40" />
            </a>
            <div className="desc"> State Of Decay </div>
          </div>

          <div className="gallery">
            <a target="_blank" href="img_lights.jpg">
              <img src={require('../assets/spiderMan.jpeg')} alt="Northern Lights" width="50" height="40" />
            </a>
            <div className="desc">Spider Man</div>
          </div>

          <div className="gallery">
            <a target="_blank" href="img_mountains.jpg">
              <img src={require('../assets/Ghost.jpeg')} alt="Mountains" width="60" height="40" />
            </a>
            <div className="desc"> GHOST </div>
          </div>

          <div className="gallery">
            <a target="_blank" href="img_forest.jpg">
              <img src={require('../assets/fallOut4.jpeg')} alt="Forest" width="60" height="40" />
            </a>
            <div className="desc"> State Of Decay </div>
        </div>
        </div>

     
<div>
 <p>FLASH SALES</p>
<div className="Sliders">
<img className="mySlides" src={require('../assets/beachgear.jpeg')} />
  <img className="mySlides" src={require('../assets/techproducts.jpeg')} />
  <img className="mySlides"  src={require('../assets/Homeappliances.jpeg')} />
  <img className="mySlides"  src={require('../assets/mensbanner.jpg')}width="500" height="300" />
  <img className="mySlides" src={require('../assets/shopwoman.jpg')} width="500" height="300"/>
  </div>
  </div>
  
 
  <div class="w3-row-padding w3-section">
    <div class="w3-col s4">
      <img class="demo w3-opacity" src={require('../assets/techproducts.jpeg')}
      width="100" onclick="currentDiv(1)"/>
    </div>
  
  <div class="w3-col s4">
      <img class="demo w3-opacity" src={require('../assets/Homeappliances.jpeg')}
      width="100"  onclick="currentDiv(2)"/>
    </div>

    <div class="w3-col s4">
      <img class="demo w3-opacity" src={require('../assets/Homeappliances.jpeg')}
      width="100" onclick="currentDiv(3)"/>
    </div>
  </div>
  


          <div>

            <h1> Best Sellers </h1>
            <div className="gallery">

              <a target="_blank" href="img_5terre.jpg">

                <img src={require('../assets/4ktv.webp')} alt="Cinque Terre" width="50" height="50" />

              </a>
              <div className="desc"> 4k HDTV </div>

            </div>


            <div className="gallery">

              <a target="dropdown" href="img_forest.jpg">

                <img src={require('../assets/VR.jpeg')} alt="Forest" width="60" height="40" />
              </a>
              <div className="desc"> VR headset </div>

            </div>

            <div className="gallery">
              <a target="_blank" href="img_lights.jpg">
                <img src={require('../assets/nike.jpeg')} alt="Northern Lights" width="50" height="40" />
              </a>
              <div className="desc">Nike Vapormax</div>
            </div>


            <div className="gallery">
              <a target="_blank" href="img_mountains.jpg">
                <img src={require('../assets/alexa.jpg')} alt="Mountains" width="60" height="40" />
              </a>
              <div className="desc"> Hi Alexa </div>
            </div>


            <div className="gallery">
              <a target="_blank" href="img_forest.jpg">
                <img src={require('../assets/SummerTent.jpg')} alt="Forest" width="80" height="50" />
              </a>
              <div className="desc"> Shop Tents </div>
            </div>
         </div>

</>

        );
    }
}
export default MarketPlace;