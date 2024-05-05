import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import Navbar from "scenes/navbar";
import './login.css';

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Navbar />
      <Box 
        width={isNonMobileScreens ? "50%" : "93%"}
        p="1rem 0px 0px 0px"
        m="0px auto"
        backgroundColor={theme.palette.background.alt}
      >
        <img src="../../../../assets/LB Logo (Dark).png" alt="logo" className="logo"/>
      </Box>
        {/* FORM BOX */}
      <Box 
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="0px auto"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          A paradise like Baguio in Metro Manila
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;