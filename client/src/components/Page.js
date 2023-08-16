import React, { useState } from "react";
import Shake from "./Shake";
import FavoriteBtn from "./FavoriteBtn";
import { Link } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Page() {
  const [name, setName] = useState("Click Shake");
  const [address, setAddress] = useState(
    "To find a random restaurant near you!"
  );

  return (
    <div className="App">
      <section>
        <div id="body-btns-container">
          <Shake setName={setName} setAddress={setAddress} />
        </div>
        <div id="ball">
          <div id="window">
            <p id="restaurant-name">{name}</p>
            <p id="restaurant-address">{address}</p>
            <div id="triangle"></div>
          </div>
        </div>
        <script src="index.js"></script>
      </section>
    </div>
  );
}

export default Page;
