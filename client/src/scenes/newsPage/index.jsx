import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import PostsWidget from "scenes/widgets/PostsWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";

const NewsPage = () => {
    const user = useSelector((state) => state.user);
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const _id = user ? user._id : null;
    const { picturePath } = user || {};
    let isAdmin = false;

    if (user !== null && user !== undefined) {
        if(user.userType === "admin") {
            isAdmin = true;
        }
    }

    return (<Box>
        <Navbar />
        <Box
            width="100%"
            backgroundColor={"#A4DDDE"}
            p="1rem 6%"
            textAlign="center"
        >
            <Typography fontWeight="bold" fontSize="32px" color="#303030" padding="2rem">
                News and Updates
            </Typography>
        </Box>
        <Box
            justifyContent="center"
            alignItems="center"
            margin="auto"
        >
            <Box
                width={isNonMobileScreens ? "60vw" : "100vw"}
                maxWidth="800px"
                m="auto"
            >
                {isAdmin && (
                    <>
                        <MyPostWidget picturePath={picturePath} />
                    </>
                )}
                <PostsWidget userId={_id} />
            </Box>
            
        </Box>
        
    </Box>);
};

export default NewsPage;