import * as React from "react";
import {BottomNavigation, BottomNavigationAction, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {Email, Handyman, School, Work} from "@mui/icons-material";
import {ScrollLink} from "react-scroll";

// the navigation bar for phones (screen size < md)
function PhoneNav(props) {
    const theme = useTheme();
    const [value, setValue] = React.useState("education");

    const handleChange = (_event, newValue) => {
        setValue(newValue);
    };

    let NavigationComponent = ScrollLink(BottomNavigationAction);

    // disappear on a desktop screen
    if (useMediaQuery(theme.breakpoints.up("md"))) {
        return null;
    }

    return (
        <BottomNavigation sx={{position: "fixed", bottom: "0px", left: "0px", right: "0px", zIndex: 2, "& .Mui-selected": {color: theme.palette.secondary.main + "!important"}}} value={value} onChange={handleChange}>
            <NavigationComponent to="education" spy={true} {...props.scrollSettings} label="education" value="education" icon={<School />} onSetActive={() => {handleChange(null, "education");}} onSetInactive={() => {handleChange(null, "");}}/>
            <NavigationComponent to="experience" spy={true} {...props.scrollSettings} label="experience" value="experience" icon={<Work />} onSetActive={() => {handleChange(null, "experience");}} onSetInactive={() => {handleChange(null, "");}}/>
            <NavigationComponent to="projects" spy={true}  {...props.scrollSettings} label="projects" value="projects" icon={<Handyman />} onSetActive={() => {handleChange(null, "projects");}} onSetInactive={() => {handleChange(null, "");}}/>
            <NavigationComponent to="contact" spy={true} {...props.scrollSettings} label="contact" value="contact" icon={<Email />} onSetActive={() => {handleChange(null, "contact");}} onSetInactive={() => {handleChange(null, "");}}/>
        </BottomNavigation>
    );
}

export default PhoneNav;