import React, {Children} from "react";
import {List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {CheckBox} from "@mui/icons-material";

// turns a <ul> list into a list with checkboxes for the bullets
function CheckboxList(props) {
    const listElements = Children.toArray(props.children).map(element => element.props.children);
    return (
        <List>
            {
                listElements.map((text) => {
                    return (
                        <ListItem key={text} disablePadding>
                            <ListItemIcon>
                                <CheckBox style={{ color: props.iconColor }}/>
                            </ListItemIcon>
                            <ListItemText disableTypography={true}>
                                <Typography variant={props.variant} >{text}</Typography>
                            </ListItemText>
                        </ListItem>
                    );
                })
            }
        </List>
    );
}

export default CheckboxList;