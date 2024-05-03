import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        req.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
// NO NEED FOR THIS CODE
export const getUserFriends = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await User.findById(id);

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        const formattedFriends = friends.map(
            ({ _id, username, picturePath}) => {
                return { _id, username, picturePath };
            }
        );
        res.status(200).json(formattedFriends);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};


/* UPDATE */ // NO NEED FOR THIS CODE
export const addRemoveFriend = async (req, res) => {
    try {
        const { id, friendID } = req.params;
        const user = await User.findByID(id);
        const friend = await User.findByFriendID(friendID);

        if(user.friends.includes(friendId)){
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends = friend.friends.filter((id) => id !== id);
        } else {
            user.friends.push(friendId);
            friend.friends.push(id);
        }
        await user.save();
        await friend.save();

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        const formattedFriends = friends.map(
            ({ _id, username, picturePath}) => {
                return { _id, username, picturePath };
            }
        );
        
        res.status(200).json(formattedFriends);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};