import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material";
import {InfoOutlined, PhoneOutlined} from '@mui/icons-material';
import FlexBetween from "components/FlexBetween";
import Navbar from "scenes/navbar";
import { useState } from "react";

const ResourcePage = () => {
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
                    Resource Directory
                </Typography>
            </Box>
            <Box
                justifyContent="center"
                alignItems="center"
                display={"flex"}
            >
                <Box alignItems="center" justifyContent="center" m="auto">
                <Box
                    width={isNonMobileScreens ? "60vw" : "100vw"}
                    maxWidth="800px"
                    justifyContent="center"
                    alignItems="center"
                    margin="auto"
                    p="2.5em 0"
                    backgroundColor={"#8C8C8C"}
                >
                    <Typography
                        fontFamily={"Montserrat"}
                        fontWeight={"700"}
                        margin="auto"
                        align="center"
                        fontSize={isNonMobileScreens ? "3em" : "2em"}
                    >
                        Little Baguio
                    </Typography>
                    <Box display="flex" 
                        alignItems="center"
                        p="1em 4em">
                        <InfoOutlined/>
                        <Typography
                            fontFamily={"Montserrat"}
                            fontWeight={"300"}
                            fontSize={isNonMobileScreens ? "1.5em" : "1em"}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum.
                        </Typography>
                    </Box>
                    <Box display="flex" 
                        alignItems="center"
                        p="1em 4em">
                        <PhoneOutlined/>
                        <Typography
                            fontFamily={"Montserrat"}
                            fontWeight={"300"}
                            fontSize={isNonMobileScreens ? "1.5em" : "1em"}
                        >
                            +639342774921
                        </Typography>
                    </Box>
                </Box>

                <Box
                    width={isNonMobileScreens ? "60vw" : "100vw"}
                    maxWidth="800px"
                    justifyContent="center"
                    alignItems="center"
                    margin="auto"
                    p="2.5em 0"
                    backgroundColor={"#E2DFD5"}
                >
                    <Typography
                        fontFamily={"Montserrat"}
                        fontWeight={"700"}
                        margin="auto"
                        align="center"
                        fontSize={isNonMobileScreens ? "3em" : "2em"}
                    >
                        Hospital
                    </Typography>
                    <Box display="flex" 
                        alignItems="center"
                        p="1em 4em">
                        <InfoOutlined/>
                        <Typography
                            fontFamily={"Montserrat"}
                            fontWeight={"300"}
                            fontSize={isNonMobileScreens ? "1.5em" : "1em"}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum.
                        </Typography>
                    </Box>
                    <Box display="flex" 
                        alignItems="center"
                        p="1em 4em">
                        <PhoneOutlined/>
                        <Typography
                            fontFamily={"Montserrat"}
                            fontWeight={"300"}
                            fontSize={isNonMobileScreens ? "1.5em" : "1em"}
                        >
                            +639342774921
                        </Typography>
                    </Box>
                </Box>

                <Box
                    width={isNonMobileScreens ? "60vw" : "100vw"}
                    maxWidth="800px"
                    justifyContent="center"
                    alignItems="center"
                    margin="auto"
                    p="2.5em 0"
                    backgroundColor={"#8C8C8C"}
                >
                    <Typography
                        fontFamily={"Montserrat"}
                        fontWeight={"700"}
                        margin="auto"
                        align="center"
                        fontSize={isNonMobileScreens ? "3em" : "2em"}
                    >
                        Fire station
                    </Typography>
                    <Box display="flex" 
                        alignItems="center"
                        p="1em 4em">
                        <InfoOutlined/>
                        <Typography
                            fontFamily={"Montserrat"}
                            fontWeight={"300"}
                            fontSize={isNonMobileScreens ? "1.5em" : "1em"}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum.
                        </Typography>
                    </Box>
                    <Box display="flex" 
                        alignItems="center"
                        p="1em 4em">
                        <PhoneOutlined/>
                        <Typography
                            fontFamily={"Montserrat"}
                            fontWeight={"300"}
                            fontSize={isNonMobileScreens ? "1.5em" : "1em"}
                        >
                            +639342774921
                        </Typography>
                    </Box>
                </Box>
                <Box backgroundColor={"#E2DFD5"} p={isNonMobileScreens ? "1.5em" : "0"}>
                    <Typography
                            fontFamily={"Montserrat"}
                            fontWeight={"700"}
                            margin="auto"
                            align="center"
                            fontSize={isNonMobileScreens ? "3em" : "1em"}
                        >
                            Feedback & Complaints
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
            </Box>
            
        </Box>
    );
};

export default ResourcePage;