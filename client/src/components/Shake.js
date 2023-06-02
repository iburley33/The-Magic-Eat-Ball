import React from "react";
import { apiCall } from "../utils/API";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Shake({ setName, setAddress }) {
  const shakeIt = async function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await apiCall(latitude, longitude);
          console.log(response);
          const num = response.results.length;
          console.log(num);
          const ind = Math.floor(Math.random() * num);
          const restaurant = {
            name: response.results[ind].name,
            address: response.results[ind].location.address,
          };
          setName(restaurant.name);
          setAddress(restaurant.address);
          console.log(restaurant);
          return restaurant;
        } catch (error) {
          console.log(error);
        }
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <button onClick={shakeIt} id="shake-btn">
      SHAKE
    </button>
  );
}

export default Shake;
