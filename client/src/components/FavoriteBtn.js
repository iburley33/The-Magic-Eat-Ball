import React from 'react';
import { savedRestaurants } from '../utils/API';
import authService from '../utils/auth'




// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function FavoriteBtn({ name, address }) {

    const setFavorite = async function () {
        const restData = {
            name: name,
            address: address
        };
        console.log(restData);
        const token = authService.getToken();
        console.log(token)
        savedRestaurants(restData, token)
            .then(response => response.json())
            .then(data => console.log(data))

    }



    return (
        <button onClick={setFavorite} className="btn" id="fave-this-btn">Favorite this restaurant?</button>
    );
}

export default FavoriteBtn;
