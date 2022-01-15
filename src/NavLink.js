import React from "react";
import {Typography} from "@mui/material";
import {withStyles} from "@mui/styles";
import {Link} from "react-scroll";

// this is so scrollSpy can pass the theme in as a class upon scrolling to a link
const styles = theme => ({
    navbarActive: {
        color: theme.palette.secondary.main,
    }
});

// creates the spy navigation links for desktop navigation
function NavLink(props) {
    let div = React.useRef();
    return (
        <Link to={props.to} spy={true} {...props.scrollSettings} activeClass={props.classes.navbarActive}
            onSetActive={() => {
                div.current.style.width = "100%";
            }}
            onSetInactive={() => {
                div.current.style.width = "0%";
            }}>
                <Typography variant="h4" color="text.secondary" sx={{color: "inherit"}}>{props.children}</Typography>
                <div ref={div} style={{width: "0%", height: "2px", background: props.theme.palette.secondary.main, transition: "width .6s ease"}}></div>
        </Link>
    );
}

export default withStyles(styles, { withTheme: true })(NavLink);