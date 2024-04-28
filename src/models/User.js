import { Schema, model, models } from "mongoose";
const mongoose = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exist'],
        required: [true, 'Email is required'],
    },
    username: {
        type: String,
        required: [true, 'username is required'],
    },
    image: {
        type: String,
    },
    bookmarks: [{
        type: Schema.Types.ObjectId,
        ref: 'Property'
    }],
}, { timestamps: true })

const User = models.User || model('User', userSchema);
export default User;