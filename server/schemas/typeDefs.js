const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  {
    email: {
      type: String
      required: true
      unique: true
      match: [/.+@.+\..+/, 'Must use a valid email address']
    }
    password: {
      type: String
      required: true
    }
    savedRestaurants: [Restaurant]
  }
}

  type Restaurant {
    name: {
      type: String
      required: true
    }
    address: {
      type: String
     required: true
    }
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    restaurant: [Restaurant]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
