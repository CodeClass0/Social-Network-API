const { Schema, model } = require('mongoose');


const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // match:["","email address invalid"]
        },
        thoughts: [{
                type: Schema.Types.ObjectId,
                ref: "Thought",
                required: false
            }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: false
        }]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

userSchema
    .virtual("friendCount")
    .get(function () {
        return this.friends.length;
    });

const User = model('User', userSchema);

module.exports = User;

