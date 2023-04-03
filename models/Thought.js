const {Schema , model} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            String,
            required: true,
            maxLength: 280,
        },
        username:{
            String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: (date) => timeSince(date)
        }
    },
    {
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
    }
)


const thoughtSchema = new Schema(
    {
        thoughtText: {
            String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: (date) => timeSince(date)
        },
        username: [ 
            {
                String,
                required: true,
            },
        ],
        reactions: [ reactionSchema ]
    },
    {
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
    }
);


const Thought = model('thought', thoughtSchema);

module.exports = Thought;