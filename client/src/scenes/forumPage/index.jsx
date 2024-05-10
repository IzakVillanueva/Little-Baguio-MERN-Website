import { Box, Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import ForumsWidget from "scenes/widgets/ForumsWidget";
import MyForumWidget from "scenes/widgets/MyForumWidget";

const ForumPage = () => {
    const user = useSelector((state) => state.user);
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const _id = user ? user._id : null;
    const { picturePath } = user || {};

    return (<Box>
        <Navbar />
        <Box
            width="100%"
            backgroundColor={"#A4DDDE"}
            p="1rem 6%"
            textAlign="center"
        >
            <Typography fontWeight="bold" fontSize="96px" color="#303030" padding="2rem">
                Community Forum
            </Typography>
        </Box>
        <Box
            justifyContent="center"
            alignItems="center"
            margin="auto"
            display="flex"
        >
            <Box
                width={isNonMobileScreens ? "60vw" : "100vw"}
                maxWidth="800px"
                margin="auto"
            >
                <MyForumWidget picturePath={picturePath} />
                <ForumsWidget userId={_id} /> 
            </Box>
            
        </Box>
    </Box>);
};

export default ForumPage;