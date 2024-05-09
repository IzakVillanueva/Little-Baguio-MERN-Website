import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
    forums: [],
    username: '',
    description: '',
    replyText: '',
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setMode: (state) => {
        state.mode = state.mode === "light" ? "dark" : "light";
      },
      setLogin: (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      },
      setLogout: (state) => {
        state.user = null;
        state.token = null;
      },
      setFriends: (state, action) => {
        if (state.user) {
          state.user.friends = action.payload.friends;
        } else {
          console.error("user friends non-existent :(");
        }
      },
      setPosts: (state, action) => {
        state.posts = action.payload.posts;
      },
      setPost: (state, action) => {
        const updatedPosts = state.posts.map((post) => {
          if (post._id === action.payload.post._id) return action.payload.post;
          return post;
        });
        state.posts = updatedPosts;
      },
      setForums: (state, action) => {
        state.forums = action.payload.forums;
      },
      setForum: (state, action) => {
        const updatedForums = state.forums.map((forum) => {
          if (forum._id === action.payload.forum._id) return action.payload.forum;
          return forum;
        });
        state.forums = updatedForums;
      },
      addReply: (state, action) => {
        const { replyText, username, description } = action.payload;
        state.replyText = replyText;
        state.username = username;
        state.description = description;
      },
    },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost, setForums, setForum, addReply } = authSlice.actions;
export default authSlice.reducer;