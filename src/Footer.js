import * as React from "react";
import {Box, Stack} from "@mui/material";
import {useTheme} from "@mui/styles";
import {GitHub, LinkedIn} from "@mui/icons-material";

// the footer for the website
function Footer() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Stack direction="row" spacing={3} display="flex" justifyContent="center" sx={{paddingTop: 6, "& > a": {color: theme.palette.text.primary, textDecoration: "none"}, "& > a:hover": {color: theme.palette.secondary.main}, "& svg": {width: "50px", height: "50px"}}}>
                <a href="https://github.com/aadhi0319" target="_blank" rel="noreferrer"><GitHub /></a>
                <a href="https://www.linkedin.com/in/aadhithya-kannan" target="_blank" rel="noreferrer"><LinkedIn /></a>
            </Stack>
            <Box sx={{"& a": {textDecoration: "none", color: theme.palette.secondary.main}, paddingTop: "10px", paddingBottom: "40px"}}>
                <a rel="license noreferrer" target="_blank" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style={{borderWidth: 0}} src="images/CreativeCommons.webp" /></a><br /><span {...{"xmlns:dct": "http://purl.org/dc/terms/"}} href="http://purl.org/dc/dcmitype/InteractiveResource" property="dct:title" rel="dct:type">Portfolio</span> by <a {...{"xmlns:cc": "http://creativecommons.org/ns#"}} href={process.env.REACT_APP_PUBLIC_URL} target="_blank" property="cc:attributionName" rel="cc:attributionURL noreferrer">Aadhithya Kannan</a> is licensed under a <a rel="license noreferrer" href="http://creativecommons.org/licenses/by-nc/4.0/" target="_blank">Creative Commons Attribution-NonCommercial 4.0 International License</a>.<br />Based on a work at <a {...{"xmlns:dct": "http://purl.org/dc/terms/"}} href={process.env.PUBLIC_URL} target="_blank" rel="dct:source noreferrer">{process.env.REACT_APP_PUBLIC_URL}</a>. Source code published at <a href="https://github.com/aadhi0319/Portfolio" target="_blank" rel="noreferrer">https://github.com/aadhi0319/Portfolio</a>.<br />Privacy policy at <a href={`${process.env.REACT_APP_PUBLIC_URL}/privacy`} target="_blank" rel="noreferrer">{`${process.env.REACT_APP_PUBLIC_URL}/privacy`}</a>.
            </Box>
        </React.Fragment>
    );
}

export default Footer;