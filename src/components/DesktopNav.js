import React from "react";
import {Card, CardContent, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import NavLink from "./NavLink";

// the navigation bar for desktops (screen size >= md)
function DesktopNav(props) {
    const theme = useTheme();

    // disappear on a mobile screen
    if (!useMediaQuery(theme.breakpoints.up("md"))) {
        return null;
    }

    return (
        <Card sx={{minWidth: 275, overflow: "initial", marginRight: 2}}>
            <CardContent sx={{position: "sticky", top: "1rem", "& a": {cursor: "pointer"}}}>
                <NavLink to="education" scrollSettings={props.scrollSettings}>education</NavLink>
                <NavLink to="experience" scrollSettings={props.scrollSettings}>experience</NavLink>
                <NavLink to="projects" scrollSettings={props.scrollSettings}>projects</NavLink>
                <NavLink to="contact" scrollSettings={props.scrollSettings}>contact</NavLink>
            </CardContent>
        </Card>
    );
}

export default DesktopNav;