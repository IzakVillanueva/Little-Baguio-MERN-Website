import Forum from "../models/Forum.js";
import User from "../models/User.js";

/* CREATE */
export const createForum = async (req, res) => {
    try {
      const { userId, description, picturePath, replyUser, replyDescription } = req.body;
      const user = await User.findById(userId);
      const newForum = new Forum({
        userId,
        username: user.username,
        description,
        picturePath,
        replyUser,
        replyDescription,
      });
      await newForum.save();
  
      const forum = await Forum.find();  // this grabs all the forums updated
      res.status(201).json(forum);
    } catch (err) {
      res.status(409).json({ message: err.message });
    }
};

/* READ */ //handle getting all forums
export const getForums = async (req, res) => {
    try {
      const forum = await Forum.find(); //grab all forums
      res.status(200).json(forum);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
};