const { AuthenticationError } = require('apollo-server-express');
const { Matchup, Tech } = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    techs: async () => {
      return Tech.find();
    },
    matchup: async (parent, { _id }) => {
      var matchupID = _id
      return Matchup.findOne({ _id: matchupID });
    },

  },

  Mutation: {
    addMatchup: async (parent, { tech1, tech2 }) => {
      const matchup = await Matchup.create({ tech1, tech2 });
      return { matchup };
    },

    addVote: async (parent, { _id, techNum }) => {
      var matchupID = _id
      const vote = await Matchup.findOneAndUpdate({
        _id: matchupID
      },
        { $inc: { [`tech${techNum}_votes`]: 1 } }
      );
      return { vote };
    },
  },
  //     addThought: async (parent, { thoughtText }, context) => {
  //       if (context.user) {
  //         const thought = await Thought.create({
  //           thoughtText,
  //           thoughtAuthor: context.user.username,
  //         });

  //         await User.findOneAndUpdate(
  //           { _id: context.user._id },
  //           { $addToSet: { thoughts: thought._id } }
  //         );

  //         return thought;
  //       }
  //       throw new AuthenticationError('You need to be logged in!');
  //     },
  //     addComment: async (parent, { thoughtId, commentText }, context) => {
  //       if (context.user) {
  //         return Thought.findOneAndUpdate(
  //           { _id: thoughtId },
  //           {
  //             $addToSet: {
  //               comments: { commentText, commentAuthor: context.user.username },
  //             },
  //           },
  //           {
  //             new: true,
  //             runValidators: true,
  //           }
  //         );
  //       }
  //       throw new AuthenticationError('You need to be logged in!');
  //     },
  //     removeThought: async (parent, { thoughtId }, context) => {
  //       if (context.user) {
  //         const thought = await Thought.findOneAndDelete({
  //           _id: thoughtId,
  //           thoughtAuthor: context.user.username,
  //         });

  //         await User.findOneAndUpdate(
  //           { _id: context.user._id },
  //           { $pull: { thoughts: thought._id } }
  //         );

  //         return thought;
  //       }
  //       throw new AuthenticationError('You need to be logged in!');
  //     },
  //     removeComment: async (parent, { thoughtId, commentId }, context) => {
  //       if (context.user) {
  //         return Thought.findOneAndUpdate(
  //           { _id: thoughtId },
  //           {
  //             $pull: {
  //               comments: {
  //                 _id: commentId,
  //                 commentAuthor: context.user.username,
  //               },
  //             },
  //           },
  //           { new: true }
  //         );
  //       }
  //       throw new AuthenticationError('You need to be logged in!');
  //     },
  //   },
};

module.exports = resolvers;
