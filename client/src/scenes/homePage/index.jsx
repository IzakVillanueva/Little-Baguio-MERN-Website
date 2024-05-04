import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import './home.css';

const HomePage = () => {
    return (<Box>
        <Navbar />
        <section class="hero">
            <div class="container">
                <div class="hero-text">
                    <h1>Be a part of the Community!</h1>
                    <p>Get the latest updates, connect with others, and benefit from the services we offer.</p>
                </div>
            </div>
        </section>
    </Box>);
};

export default HomePage;