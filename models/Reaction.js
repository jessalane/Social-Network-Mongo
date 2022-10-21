const { Schema, model } = require('mongoose');

const reactionsSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      
    reactionBody: {
        type: String,
        required: true,
        max: 280,
      },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
        type: Date,
      default: Date.now,
    },

  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Reaction = model('reaction', reactionsSchema);

module.exports = Reaction;