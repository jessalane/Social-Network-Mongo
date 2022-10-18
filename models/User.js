const { Schema, Types } = require('mongoose');
const thoughtSchema = require('./Thought');
const userSchema = require('./User');

const usersSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true 
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // figure out validation
    },
    // figure out referencing
    // thoughts: [thoughtSchema],
    // friends: [userSchema],

  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = usersSchema;
