import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setForums } from "state";
import ForumWidget from "./ForumWidget";

const ForumsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const forums = useSelector((state) => state.forums);
  const token = useSelector((state) => state.token);

  const getForums = async () => {
    const response = await fetch("https://littlebaguio-api.vercel.app/forums", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setForums({ forums: data }));
  };

  useEffect(() => {
    getForums();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <>
      {Array.isArray(forums)&&
      forums.map(
        ({
          _id,
          userId,
          username,
          description,
          picturePath,
          replyUser,
          replyDescription,
        }) => (
          <ForumWidget
            key={_id}
            forumId={_id}
            forumUserId={userId}
            name={username}
            description={description}
            picturePath={picturePath}
            replyUser={replyUser}
            replyDescription={replyDescription}
          />
        )
      )}
    </>
  );
};

export default ForumsWidget;