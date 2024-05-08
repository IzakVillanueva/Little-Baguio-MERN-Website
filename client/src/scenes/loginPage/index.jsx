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
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box 
          width={isNonMobileScreens ? "50%" : "100%"}
          p="2rem 0px 0px 0px"
          m="0px auto"
          backgroundColor={theme.palette.background.alt}
          alignItems="center" justifyContent="center"
        >
          <img src="../../../../assets/LB Logo (Dark).png" alt="logo" className="logo"/>
          <Box p="1rem 2rem 0 2rem">
            <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
              A paradise like Baguio in Metro Manila
            </Typography>
            {/* FORM BOX */}
            <Form />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;