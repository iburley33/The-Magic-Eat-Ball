export const getMe = (token) => {
  return fetch("./api/users/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const saveRestaurants = (restaurantData, token) => {
  return fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(restaurantData),
  });
};

// remove saved restaurant data for a logged in user
export const deleterestaurant = (restaurantId, token) => {
  return fetch(`/api/users/restaurant/${restaurantId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// make a search to restaurants api

const options = { method: "GET", headers: { accept: "application/json" } };
const location = "Rocklin";
fetch(
  `https://api.foursquare.com/v3/places/search?query=restaurant&ll=${location}&radius=20000`,
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
