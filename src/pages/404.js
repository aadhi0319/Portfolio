import React from "react";
import {Container, CssBaseline, Typography} from "@mui/material";
import Footer from "../components/Footer";

export default () => (
    // render 404 page
    <Container maxwidth="md">
        <div style={{display: "flex", width: "100%", height: "70vh", justifyContent: "center", alignItems: "center"}}>
            <CssBaseline />
            <div style={{display: "block"}}>
                <Typography variant="h1" color="secondary" sx={{fontSize: "10rem", textAlign: "center"}}>404</Typography>
                <Typography variant="h3" sx={{textAlign: "center"}}>Page Not Found.</Typography>
            </div>
        </div>
        <Footer />
    </Container>
);
