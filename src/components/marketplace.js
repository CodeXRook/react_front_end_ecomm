import React from 'react';

class MarketPlace extends React.Component{
    constructor(props){
        super (props);

        this.state ={
            input:''
        }
    }

    render(){
        return (
            
            <h1> Welcome To MarketPlace</h1>
        );
    }
}
export default MarketPlace;