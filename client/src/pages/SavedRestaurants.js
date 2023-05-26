import React, { useState, useEffect } from "react";

import { getMe, deleteRestaurant } from "../utils/API";
import Auth from "../utils/auth";
import { removeRestaurantId } from "../utils/localStorage";
const Savedrestaurants = () => {
  const [userData, setUserData] = useState({});

  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token);

        if (!response.ok) {
          throw new Error("something went wrong!");
        }

        const user = await response.json();
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);

  // create function that accepts the restaurant's mongo _id value as param and deletes the restaurant from the database
  const handleDeleterestaurant = async (restaurantId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await deleterestaurant(restaurantId, token);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const updatedUser = await response.json();
      setUserData(updatedUser);
      // upon success, remove restaurant's id from localStorage
      removeRestaurantId(restaurantId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div fluid className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing saved restaurants!</h1>
        </Container>
      </div>
      <Container>
        <h2 className="pt-5">
          {userData.savedrestaurants.length
            ? `Viewing ${userData.savedrestaurants.length} saved ${
                userData.savedrestaurants.length === 1
                  ? "restaurant"
                  : "restaurants"
              }:`
            : "You have no saved restaurants!"}
        </h2>
        <Row>
          {userData.savedrestaurants.map((restaurant) => {
            return (
              <Col md="4">
                <Card key={restaurant.restaurantId} border="dark">
                  {restaurant.image ? (
                    <Card.Img
                      src={restaurant.image}
                      alt={`The cover for ${restaurant.title}`}
                      variant="top"
                    />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{restaurant.title}</Card.Title>
                    <p className="small">Authors: {restaurant.authors}</p>
                    <Card.Text>{restaurant.description}</Card.Text>
                    <Button
                      className="btn-block btn-danger"
                      onClick={() =>
                        handleDeleterestaurant(restaurant.restaurantId)
                      }
                    >
                      Delete this Restaurant!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SavedRestaurant;
