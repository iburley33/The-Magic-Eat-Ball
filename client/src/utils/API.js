import axios from "axios";

export const getMe = (token) => {
  return fetch("./api/users/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userFormData) => {
  console.log(userFormData);
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userFormData),
  });
};
export const loginUser = (userFormData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userFormData),
  });
};

export const savedRestaurants = (restaurantData, token) => {
  return fetch("/api/users/favorites", {
    method: "POST",
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

export const apiCall = () => {
  var options = {
    method: "GET",
    url: "https://api.foursquare.com/v3/places/nearby",
    params: { ll: "41.8781,-87.6298", query: "restaurant" },
    headers: {
      "Content-Type": "application/json",
      Authorization: "fsq3MCDbdCEyYkWd2SlChepWU/u1pQhfsFRSCr2Jm8qx8x4=",
    },
  };

  return axios(options)
    .then(function (response) {
      console.log(response.data);
      const apiData = response.data;
      return apiData;
    })
    .catch(function (error) {
      console.error(error);
    });
};
