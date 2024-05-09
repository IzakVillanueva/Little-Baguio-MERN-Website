import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import { useState } from "react";

const ServicePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        setValue('');
        e.preventDefault();
    }
    return (
        <Box>
            <Navbar />
            <Box
                width="100%"
                backgroundColor={"#A4DDDE"}
                p="1rem 6%"
                textAlign="center"
            >
                <Typography fontWeight="bold" fontSize="32px" color="#303030" padding="2rem">
                    Services
                </Typography>
            </Box>
            <Box backgroundColor={"#E2DFD5"} p={isNonMobileScreens ? "1.5em" : "0"}>
                <Typography
                        fontFamily={"Montserrat"}
                        fontWeight={"700"}
                        margin="auto"
                        align="center"
                        fontSize={isNonMobileScreens ? "3em" : "1em"}
                    >
                        Service Request Form
                </Typography>
                <Box alignItems="center">
                    <TextField value={value} 
                        onChange={(e)=>setValue(e.target.value)}
                        backgroundColor="#fff"/>
                    <Button type="submit" onClick={handleSubmit} m="auto">
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ServicePage;