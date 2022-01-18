import React from "react";
import {makeStyles, useTheme} from "@mui/styles";
import Masonry from "react-masonry-css";
import PropTypes from "prop-types";

/**
 * the default mui masonry component, which is still in an experimental state
 * did not work properly. this mui wrapper for a tried and tested
 * react-masonry-css npm module was pulled from the internet as a substitue.
 */

/////////////////////////////////////////
//  Styles
/////////////////////////////////////////

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0, 2, 0)
    },
    masonryGrid: {
        display: "flex",
        marginLeft: theme.spacing(-4),
        width: "inherit"
    },
    masonryColumn: {
        paddingLeft: theme.spacing(4),
        backgroundClip: "padding-box"
    }
}));

/////////////////////////////////////////
//  PropTypes
/////////////////////////////////////////

const propTypes = {
    children: PropTypes.node,
};

/////////////////////////////////////////
//  Component
/////////////////////////////////////////

const BreakpointMasonry = ({ children }) => {
    const classes = useStyles();
    const theme = useTheme();
    const breakpointCols = {
        default: 3,
        [theme.breakpoints.values.xl]: 3,
        [theme.breakpoints.values.lg]: 3,
        [theme.breakpoints.values.md]: 2,
        [theme.breakpoints.values.sm]: 1,
        [theme.breakpoints.values.xs]: 1,
    };

    return (
        <Masonry
            breakpointCols={breakpointCols}
            className={classes.masonryGrid}
            columnClassName={classes.masonryColumn}
        >
            {children}
        </Masonry>
    );
};

BreakpointMasonry.propTypes = propTypes;

export default BreakpointMasonry;