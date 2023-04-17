const connection = require('../config/connection');
const {Schema , model } = require('mongoose');
const Reaction = require('./Reaction');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            // get: (date) => timeSince(date)
        },
        username: [ 
            {
                type: String,
                required: true,
            },
        ],
        reactions: [ Reaction ]
    },
    {
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
    }
);


const Thought = model('Thought', thoughtSchema);


// connection.once('open', async () => {
    
  
//     await Thought.collection.insertMany([
//         {username: "Bob", email: "bob@gmail.com", thoughtText: "Bob likes this post"},
//         {username: "Frank", email: "frank@gmail.com", thoughtText: "Frank thinks this post is great!"},
//         {username: "Harry", email: "harry@gmail.com", thoughtText: "Harry thinks birds fly really high"},
//     ]);

// });



module.exports = Thought;