import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import SearchRestraunt from './pages/SearchRestraunts';
// import SavedRestraunts from './pages/SavedRestraunts';

// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
            <h1>MAGIC EAT-BALL</h1>
            <div id="login-btns-container">
                <button class="btn" id="login-btn">Login</button>
                <button class="btn" id="signup-btn">Sign Up</button>
            </div>
        </header>
        <body>
            <div id="body-btns-container">
            <button class="btn" id="only-faves-btn">Only show favorites?</button>
            <button class="btn" id="shake-btn">Shake</button> 
            </div>
            <div id="ball">
                <div id="window">
                    <p id="restaurant-name">Restauranty McRestaurantface</p>
                    <p id="restaurant-address">1234 Some Street, Some Town, NA 12345</p>
                    <div id="triangle">
                    </div>
                </div>
            </div>
            <button class="btn" id="fave-this-btn">Favorite this restaurant?</button>
            <script src="index.js"></script>
        </body>
    </div>
  );
}

export default App;
