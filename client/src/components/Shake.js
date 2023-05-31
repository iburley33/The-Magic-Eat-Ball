import React from 'react';
import { apiCall } from '../utils/API';


const shakeIt = function() {
    let response = apiCall();
    let num = response.results.length
    console.log(response)
    console.log(num)

}


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Shake() {
    apiCall()

    return (
        <button onClick={shakeIt} class='shake'></button>
    );
}

export default Shake;
