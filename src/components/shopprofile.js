import React from 'react';
import {Link} from 'react-router-dom';


class ShopProfile extends React.Component {
    constructor(props){
        super(props);
                
          this.state = {
                shops: [{
                shop_name: 'Game Boss', 

                games: [{
                title:'spiderman',
                release_date:2018,
                console:'PS4'
                }]
              },

              {}]
        
        }
    }

    render(){
        return(

            <>
            <h1></h1>
            </>
        );
    }

}

export default ShopProfile;