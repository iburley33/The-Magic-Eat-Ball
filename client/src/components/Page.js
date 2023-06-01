import React, { useState } from 'react';
import Shake from './Shake'
import FavoriteBtn from './FavoriteBtn';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Page() {
    const [name, setName] = useState('Click Shake');
    const [address, setAddress] = useState('To find a random restaurant near you!')
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
              <Shake setName={setName} setAddress={setAddress}/>
              </div>
              <div id="ball">
                  <div id="window">
                      <p id="restaurant-name">{name}</p>
                      <p id="restaurant-address">{address}</p>
                      <div id="triangle">
                      </div>
                  </div>
              </div>
            <FavoriteBtn name={name} address={address}/>
              <script src="index.js"></script>
          </section>
      </div>
    );
}

export default Page;
