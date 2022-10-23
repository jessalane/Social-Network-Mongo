const {
  Schema,
  model
} = require('mongoose');

const usersSchema = new Schema({
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
    match: [/.+@.+\..+/, 'Input must be an email address!']
  },
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'Thought',
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }]

}, {
  toJSON: {
    getters: true,
    virtuals: true,
  },
  id: false,
});

usersSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  });

const User = model('User', usersSchema);

module.exports = User;