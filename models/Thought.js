const { Schema, Types } = require('mongoose');
const { stringify } = require('querystring');

const thoughtsSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
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
        // nested documents with reactionSchema
    ]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = thoughtsSchema;
