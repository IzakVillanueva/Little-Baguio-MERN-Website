import mongoose from "mongoose";

const forumSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        picturePath: String,
        replyUser: String,
        replyDescription: String,
    },
    { timestamps: true}
);

const Forum = mongoose.model("Forum", forumSchema);

export default Forum;