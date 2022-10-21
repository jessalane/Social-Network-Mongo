const {
  Schema,
  model
} = require('mongoose');
const ReactionSchema = require('./Reaction');

const thoughtsSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    min_length: 1,
    max_length: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true
  },
  reactions: [
    ReactionSchema
  ]
}, {
  toJSON: {
    getters: true,
    virtuals: true,
  },
  id: false,
});

thoughtsSchema
  .virtual('reactionCount')
  .get(function () {
    // get lenght of thoughts reactions array field on query
  });

const Thought = model('thought', thoughtsSchema);

module.exports = Thought;