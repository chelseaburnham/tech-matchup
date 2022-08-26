const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tech {
    _id: ID
    name: String
  }

  type Matchup {
    _id: ID
    tech1: String
    tech2: String
    tech1_votes: Int
    tech2_votes: Int
  }
  type Query {
      techs: [Tech]
      matchup: [Matchup]
    
    
    }
 type Mutation {
    addMatchup(tech1: String!, tech2: String!): Matchup
    addVote(_id: Int!, techNum: Int!): Vote

 }

`;

module.exports = typeDefs;


// type Mutation {
//   addUser(username: String!, email: String!, password: String!): Auth
//   login(email: String!, password: String!): Auth
//   addThought(thoughtText: String!): Thought
//   addComment(thoughtId: ID!, commentText: String!): Thought
//   removeThought(thoughtId: ID!): Thought
//   removeComment(thoughtId: ID!, commentId: ID!): Thought
// }