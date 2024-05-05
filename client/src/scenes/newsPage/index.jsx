import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import MyPostWidget from "scenes/widgets/MyPostWidget";

const NewsPage = () => {
    const { _id, picturePath } = useSelector((state) => state.user);
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
        <MyPostWidget picturePath={picturePath} />
    </Box>);
};

export default NewsPage;