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

export const saveBook = (restrauntData, token) => {
  return fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(restrauntData),
  });
};

// remove saved restraunt data for a logged in user
export const deleteRestraunt = (restrauntId, token) => {
  return fetch(`/api/users/restraunt/${restrauntId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// make a search to restraunt api

export const searchRestraunts = (query) => {
  return fetch(`https://www.restaurants-api.p.rapidapi.com=${query}`);
};
