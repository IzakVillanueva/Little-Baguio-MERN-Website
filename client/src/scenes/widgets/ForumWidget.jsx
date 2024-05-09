import {
    ChatBubbleOutlineOutlined,
    FavoriteBorderOutlined,
    ReplyOutlinedIcon,
    ShareOutlined,
  } from "@mui/icons-material";
  import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
  import FlexBetween from "components/FlexBetween";
  import WidgetWrapper from "components/WidgetWrapper";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { addReply } from "state";
  
  const ForumWidget = ({
    forumId,
    forumUserId,
    name,
    description,
    picturePath,
    replyUser,
    replyDescription,
  }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const loggedInUserId = useSelector((state) => state.user._id);
  
    const { palette } = useTheme();
    const main = palette.neutral.main;
    const primary = palette.primary.main;

    const handleReply = (username, description) => {
        const replyText = `Replying to ${username}'s post, ${description}`;
        dispatch(addReply(replyText));
    }
  
    return (
      <WidgetWrapper m="2rem 0">
        {/* <Friend
          friendId={postUserId}
          name={name}
          subtitle={location}
          userPicturePath={userPicturePath}
        /> */}
        {/* <Typography sx={{ 
          mt: "0.2rem",
          color:"#4EAE8A",
          fontWeight: "600",
          fontSize: "1.7em" }}>
          {title}
        </Typography> */}
        <Typography color={main} sx={{ mt: "1rem" }}>
          {description}
        </Typography>
        {picturePath && (
          <img
            width="100%"
            height="auto"
            alt="post"
            style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
            src={`http://localhost:3001/assets/${picturePath}`}
          />
        )}
        <FlexBetween mt="0.25rem">
          <FlexBetween gap="1rem">  
            <FlexBetween gap="0.3rem">
              <IconButton onClick={() => handleReply(name, description)}>
                <ReplyOutlinedIcon />
              </IconButton>
            </FlexBetween>
          </FlexBetween> 
  
          <IconButton>
            <ShareOutlined />
          </IconButton>
        </FlexBetween>
        {/* {isComments && (
          <Box mt="0.5rem">
            {comments.map((comment, i) => (
              <Box key={`${name}-${i}`}>
                <Divider />
                <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                  {comment}
                </Typography>
              </Box>
            ))}
            <Divider />
          </Box>
        )} */}
      </WidgetWrapper>
    );
  };
  
  export default ForumWidget;