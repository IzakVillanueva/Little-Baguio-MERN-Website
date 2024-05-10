import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import { useState } from "react";
import { Footer } from "scenes/homePage";

const ServicePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const [value, setValue] = useState('');
    const [Namevalue, setNameValue] = useState('');
    const [Emailvalue, setEmailValue] = useState('');
    const [Contactvalue, setContactValue] = useState('');
    const [Messagevalue, setMessageValue] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (e) => {
        setValue('');
        e.preventDefault();
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
            setNameValue('');
            setEmailValue('');
            setContactValue('');
            setMessageValue('');
        }, 2000);
    }
    const handleName = (e) => {
        setNameValue(e.target.value);
    };
    const handleEmail = (e) => {
        setEmailValue(e.target.value);
    };
    const handleContact = (e) => {
        setContactValue(e.target.value);
    };
    const handleMessage = (e) => {
        setMessageValue(e.target.value);
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
                    Services
                </Typography>
            </Box>
            <Box backgroundColor={"#FFFF"} p={isNonMobileScreens ? "1.5em" : "0"}>
                <Typography
                        fontFamily={"Montserrat"}
                        fontWeight={"700"}
                        margin="auto"
                        align="center"
                        fontSize={isNonMobileScreens ? "3em" : "1em"}
                    >
                        Service Request Form
                </Typography>
            </Box>
            <Box backgroundColor={"#FFFF"} p={isNonMobileScreens ? "1.5em" : "0"}>
                <Box alignItems="center" flexDirection="coulumn">
                    <Box align="center">
                        <TextField value={Namevalue} 
                        onChange={handleName}
                        backgroundColor="#fff"
                        placeholder="Enter your name"
                        style={{ width: isNonMobileScreens ? '700px' : '100%', height: '40px', fontSize: isNonMobileScreens ? '16px' : '14px' }}/>
                    </Box>
                    <Box align="center" paddingTop={5}>
                        <TextField value={Emailvalue} 
                            onChange={handleEmail}
                            backgroundColor="#fff"
                            placeholder="Enter your email"
                            style={{ width: isNonMobileScreens ? '345px' : '100%', height: '40px', fontSize: isNonMobileScreens ? '16px' : '14px', marginLeft: isNonMobileScreens ? '10px' : '0', marginTop: isNonMobileScreens ? '0' : '10px' }}
                        />
                        <TextField value={Contactvalue} 
                            onChange={handleContact}
                            backgroundColor="#fff"
                            placeholder="Contact No."
                            style={{ width: isNonMobileScreens ? '345px' : '100%', height: '40px', fontSize: isNonMobileScreens ? '16px' : '14px', marginLeft: isNonMobileScreens ? '10px' : '0', marginTop: isNonMobileScreens ? '0' : '10px' }}
                        />
                    </Box>
                    <Box align="center" paddingTop={5}>
                        <TextField value={Messagevalue} 
                        onChange={handleMessage}
                        backgroundColor="#fff"
                        placeholder="Enter your message"
                        multiline
                        rows={4}
                        style={{ width: isNonMobileScreens ? '700px' : '100%', height: '100px', fontSize: isNonMobileScreens ? '16px' : '14px' }}/>
                    </Box>
                    <Box align="center" paddingTop={5}>
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
                                <Typography variant="body1">Service Request Sent Successfully</Typography>
                        </Box>    
                    </Box>
                )}
            </Box>
            <Footer />
        </Box>
    );
};

export default ServicePage;