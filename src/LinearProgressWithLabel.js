import * as React from "react";
import {Box, LinearProgress, Typography} from "@mui/material";
import PropTypes from "prop-types";

// renders a circular, animated skillbar
function LinearProgressWithLabel(props) {
    let skillBarRef = React.useRef();

    // change the duration of animation
    React.useEffect(() => {
        skillBarRef.current.children[0].style.transition = "transform 1s ease";
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="body1" color="text.primary" sx={{fontWeight: "bold"}}>{props.label}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress ref={skillBarRef} variant="determinate" color="warning" value={props.value} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
                </Box>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

export default LinearProgressWithLabel;