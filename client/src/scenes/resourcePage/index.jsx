import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material";
import {InfoOutlined, PhoneOutlined} from '@mui/icons-material';
import FlexBetween from "components/FlexBetween";
import Navbar from "scenes/navbar";
import { useState } from "react";
import { Footer } from "scenes/homePage";

const ResourcePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const [value, setValue] = useState('');
    const [Servicesvalue, setServicesValue] = useState('');
    const [Messagevalue, setMessageValue] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (e) => {
        setValue('');
        e.preventDefault();
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
            setServicesValue('');
            setMessageValue('');
        }, 2000);
    }
    const handleMessage = (e) => {
        setMessageValue(e.target.value);
    };
    const handleServices = (e) => {
        setServicesValue(e.target.value);
    };

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
                    <Box align="center" paddingTop={5}>
                        <TextField value={Servicesvalue} 
                            onChange={handleServices}
                            backgroundColor="#fff"
                            placeholder="Services and Operations"
                            style={{ width: isNonMobileScreens ? '700px' : '100%', height: '100px', fontSize: isNonMobileScreens ? '16px' : '14px' }}/>
                    </Box>
                    <Box align="center" paddingTop={1}>
                        <TextField value={Messagevalue} 
                            onChange={handleMessage}
                            multiline
                            rows={8}
                            backgroundColor="#fff"
                            placeholder="Enter your message"
                            style={{ width: isNonMobileScreens ? '700px' : '100%', height: '100px', fontSize: isNonMobileScreens ? '16px' : '14px' }}/>
                    </Box>
                    <Box align="center" paddingTop={20}>
                        <Button type="submit" onClick={handleSubmit} m="auto" style={{ fontSize: isNonMobileScreens ? '13px' : '12px', padding: isNonMobileScreens ? '10px 20px' : '8px 16px' }}>
                            Submit
                        </Button>
                    </Box>        
                </Box>
            </Box>
            <Box backgroundColor={"#FFFF"} p={isNonMobileScreens ? "1.5em" : "0"}>
                            {showSuccessMessage && (
            
                                <Box
                                    position="fixed"
                                    top="0"
                                    left="0"
                                    width="100%"
                                    height="100%"
                                    backgroundColor="rgba(0, 0, 0, 0.5)" 
                                    zIndex="9999" 
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Box
                                        backgroundColor="#ffffff"
                                        padding="20px"
                                        borderRadius="10px"
                                        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
                                        textAlign="center">
                                            <Typography variant="body1">Feedback & Complaints Form Sent Successfully</Typography>
                                    </Box>    
                                </Box>
                            )}
                        </Box>
        </Box>
            <Footer/>
        </Box>
    );
};

export default ResourcePage;