import {
    EditOutlined,
    DeleteOutlined,
    ImageOutlined,
  } from "@mui/icons-material";
  import {
    Box,
    Divider,
    Typography,
    InputBase,
    useTheme,
    Button,
    IconButton,
    useMediaQuery,
  } from "@mui/material";
  import FlexBetween from "components/FlexBetween";
  import Dropzone from "react-dropzone";
  import WidgetWrapper from "components/WidgetWrapper";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { setForums } from "state";
  
  const MyForumWidget = ({ picturePath }) => {
    const dispatch = useDispatch();
    const [isImage, setIsImage] = useState(false);
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState(""); // ibahin yung setTitle
    const [forum, setForum] = useState("");
    const { palette } = useTheme();
    const { _id } = useSelector((state) => state.user);
    // const user = useSelector((state) => state.user);
    // const _id = user ? user._id : null;
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const mediumMain = palette.neutral.mediumMain;
    const medium = palette.neutral.medium;
  
    const handleForum = async () => {
      const formData = new FormData();
      formData.append("userId", _id);
      formData.append("description", forum);
      if (image) {
        formData.append("picture", image);
        formData.append("picturePath", image.name);
      }
  
      const response = await fetch(`http://localhost:3001/forums`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const forums = await response.json();
      dispatch(setForums({ forums }));
      setImage(null);
      setForum("");
      setTitle(""); // ibahin yung setTitle
    };
  
    return (
      <WidgetWrapper>
        <FlexBetween gap="1.5rem">
          <InputBase
            placeholder="State your title"
            onChange={(e) => setTitle(e.target.value)} // ibahin yung setTitle
            value={title}
            sx={{
              width: "100%",
              backgroundColor: palette.neutral.light,
              borderRadius: "2rem",
              padding: "0.3rem 2rem",
              marginBottom: "1rem",
            }}
          />
        </FlexBetween>
        <FlexBetween gap="1.5rem">
          <InputBase
            placeholder="Add description of the news or updates..."
            onChange={(e) => setForum(e.target.value)}
            value={forum}
            sx={{
              width: "100%",
              backgroundColor: palette.neutral.light,
              borderRadius: "2rem",
              padding: "1rem 2rem",
              multiline: "true",
            }}
          />
        </FlexBetween>
        {isImage && (
          <Box
            border={`1px solid ${medium}`}
            borderRadius="5px"
            mt="1rem"
            p="1rem"
          >
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
            >
              {({ getRootProps, getInputProps }) => (
                <FlexBetween>
                  <Box
                    {...getRootProps()}
                    border={`2px dashed ${palette.primary.main}`}
                    p="1rem"
                    width="100%"
                    sx={{ "&:hover": { cursor: "pointer" } }}
                  >
                    <input {...getInputProps()} />
                    {!image ? (
                      <p>Add Image Here</p>
                    ) : (
                      <FlexBetween>
                        <Typography>{image.name}</Typography>
                        <EditOutlined />
                      </FlexBetween>
                    )}
                  </Box>
                  {image && (
                    <IconButton
                      onClick={() => setImage(null)}
                      sx={{ width: "15%" }}
                    >
                      <DeleteOutlined />
                    </IconButton>
                  )}
                </FlexBetween>
              )}
            </Dropzone>
          </Box>
        )}
  
        <Divider sx={{ margin: "1.25rem 0" }} />
  
        <FlexBetween>
          <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
            <ImageOutlined sx={{ color: "#000" }} />
            <Typography
              color={"#000"}
              sx={{ "&:hover": { cursor: "pointer", color: medium } }}
            >
              Image
            </Typography>
          </FlexBetween>
  
          <Button
            disabled={!forum}
            onClick={handleForum}
            sx={{
              color: palette.background.alt,
              backgroundColor: "#4EAE8A",
              borderRadius: "3rem",
              width: "7rem",
            }}
          >
            POST
          </Button>
        </FlexBetween>
      </WidgetWrapper>
    );
  };
  
  export default MyForumWidget;