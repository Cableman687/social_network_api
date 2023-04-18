const {Schema , model } = require('mongoose');
const Reaction = require('./Reaction');
const dateFormat = require('../utils/dateFormat');


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
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
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
        timestamps: { createdAt: true, updatedAt: false },
        toJSON: { getters: true, virtuals: true },
    }
);

thoughtSchema.virtual('reactionCount').get( function()  {
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;