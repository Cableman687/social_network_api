const connection = require('../config/connection');
const mongoose = require('mongoose');
const {Schema , model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]+\.[a-z]{2,3}/],
        },
        thoughts: [ 
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ]
    },
    {

        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

userSchema
      .virtual('friendCount')
      .get(function () {
        return this.friends.length;
})

const User = model('User', userSchema);

connection.once('open', async () => {
    
  
    await User.collection.insertMany([
        {username: "Frank", email: "frank@gmail.com"},
        {username: "Harry", email: "harry@gmail.com"},
        {username: "Bob", email: "bob@gmail.com"},
    ]);
  

  });


module.exports = User;


