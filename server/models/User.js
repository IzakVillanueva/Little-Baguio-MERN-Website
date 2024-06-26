import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 100,
    },
    userType: {
        type: String,
        default: "",
    },
    picturePath: {
        type: String,
        default: "",
    },
    posts: {
        type: Array,
        default: []
    },
    comments: {
        type: Array,
        default: []
    },
    replies: {
        type: Array,
        default: []
    },
}, { timestamps: true}
);

const User = mongoose.model("User", UserSchema);
export default User;