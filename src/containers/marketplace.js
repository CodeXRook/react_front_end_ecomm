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
      <section>

      <p>FLASH SALES</p>

<div className="w3-content">
  <img className="mySlides" src="img_nature_wide.jpg" />
  <img className="mySlides" src="img_snow_wide.jpg" />
  <img className="mySlides" src={require('../assets/fallOut4.jpeg')} />
  </div>
      </section>


          <div>
            <p> Best Sellers </p>
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