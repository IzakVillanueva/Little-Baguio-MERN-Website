import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";

const NewsPage = () => {
    const theme = useTheme();
    return (<Box>
        <Navbar />
        <Box
            width="100%"
            backgroundColor={"#A4DDDE"}
            p="1rem 6%"
            textAlign="center"
        ></Box>
    </Box>);
};

export default NewsPage;