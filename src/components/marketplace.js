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
                
            }]
        }
    }

    render(){
        return (

            <h1> Welcome To MarketPlace</h1>
            
        );
    }
}
export default MarketPlace;