import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import SearchRestraunt from './pages/SearchRestraunts';
// import SavedRestraunts from './pages/SavedRestraunts';

// import logo from "./logo.svg";

import "./App.css";

function App() {

  // Thinking we'll somehow connect these to the output of the restaurant API
  const restaurantName="";
  const restaurantAddress="";

  // Right now, I'm basically carving this up and distributing it to other pages.
  return (
    <div className="App">
      <header>
            <h1>MAGIC EAT-BALL</h1>
            <div id="login-btns-container">
                {/* Need to use login component */}
                <button class="btn" id="login-btn">Login</button>
                {/* Need to use signup component */}
                {/* Question: are we still going to use conditional rendering for this? */}
                <button class="btn" id="signup-btn">Sign Up</button>
            </div>
        </header>
        <body>
            <div id="body-btns-container">
            <button class="btn" id="only-faves-btn">Only show favorites?</button>
            <button class="btn" id="view-faves-btn">View favorites</button>
            <button class="btn" id="shake-btn">Shake</button> 
            </div>
            <div id="ball">
                <div id="window">
                    <p id="restaurant-name">{restaurantName}</p>
                    <p id="restaurant-address">{restaurantAddress}</p>
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

