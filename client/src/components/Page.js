import React from 'react';
import { apiCall } from '../utils/API'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Page() {
    apiCall()
    return (
        <div className="App">
        <header>
              <h1>MAGIC EAT-BALL</h1>
              <div id="login-btns-container">
                  <button className="btn" id="login-btn">Login</button>
                  <button className="btn" id="signup-btn">Sign Up</button>
              </div>
          </header>
          <section>
              <div id="body-btns-container">
              <button className="btn" id="only-faves-btn">Only show favorites?</button>
              <button className="btn" id="view-faves-btn">View favorites</button>
              <button className="btn" id="shake-btn">Shake</button> 
              </div>
              <div id="ball">
                  <div id="window">
                      <p id="restaurant-name">Restauranty McRestaurantface</p>
                      <p id="restaurant-address">1234 Some Street, Some Town, NA 12345</p>
                      <div id="triangle">
                      </div>
                  </div>
              </div>
              <button className="btn" id="fave-this-btn">Favorite this restaurant?</button>
              <script src="index.js"></script>
          </section>
      </div>
    );
}

export default Page;
