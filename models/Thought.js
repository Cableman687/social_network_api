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

module.exports = Thought;