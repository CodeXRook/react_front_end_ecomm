import React from 'react';


export default class Home extends React.Component {







    render() {

        
        return (

 <>  

 
 <nav class="flexContainer">
                <div class="nav-wrapper">
            <ul id="nav-mobile" class="nav flexContainer flexEnd ">
           
                    <li> <a class="wcolor" href='/'> JamPack </a> </li>
        

       
                    <li><a class="wcolor" href='/'> Local Shops </a></li>
              

                <li>
                    <a class="wcolor" href='/'> MARKET PLACE </a> <input class="input" placeholder="search"/>
                    </li>
           
   
            </ul>
           
        </div>

        </nav>
    

        <div class="overlay-image"><a href='./assets/tmsq.png'>
                <div class="normal">
             </div>


                <div class="hover">
                 <div class="text" class="button pulse"> ENTER MARKET PLACE </div>

                </div>
               </a>
            </div>




       

        <div class="col-3 tout">
            <h3>Create Profile</h3>


            <a class="button" href="userprofile.html">SIGN UP NOW</a>
        </div>


        <div class="col-3 tout">
            
            <h3>TRENDS</h3>

            <a class="button" href='/'> MarketPlace</a>
            
             <a class="button" href="#"> MarketPlace </a> 

        </div>

        <div class="col-3 tout">
            <h3>Find a shop</h3>
   
            <a class="button" href='/'>START YOUR SEARCH</a>
        </div>
     
    
       </>

        )
    //    
        }
}