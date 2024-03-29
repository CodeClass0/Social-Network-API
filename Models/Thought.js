const { Schema, model, Types } = require('mongoose');
const moment = require('moment');


const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: date => {
                moment(date).format('MMMM DD YYYY, hh:mm a');
            }
        }
    },
    {
        toJSON: {
            getters:true
        }
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: date => {
                moment(date).format('MMMM DD YYYY, hh:mm a');
            }
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false
    }
);

thoughtSchema
    .virtual("reactionCount")
    .get(function () {
        this.reactions.length;
    })

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;

