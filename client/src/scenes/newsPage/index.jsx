import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import PostsWidget from "scenes/widgets/PostsWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";

const NewsPage = () => {
    const user = useSelector((state) => state.user);
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const { _id, picturePath } = useSelector((state) => state.user);
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
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
            {isAdmin && (
                <>
                    <MyPostWidget picturePath={picturePath} />
                </>
            )}
            <PostsWidget userId={_id} />
        </Box>
        
    </Box>);
};

export default NewsPage;