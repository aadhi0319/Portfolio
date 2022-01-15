import * as React from "react";
import {Alert as MuiAlert, Snackbar} from "@mui/material";

// used to send alerts to the user
class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleClose = (_event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        this.setState({open: false});
    }

    handleClick = () => {
        this.setState({open: true});
    }

    render() {
        return (
            <Snackbar sx={{marginBottom: {xs: "46px", md: "0px"}}} autoHideDuration={(this.props.duration) ? this.props.duration : 6000} open={this.state.open} onClose={this.handleClose} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
                <MuiAlert onClose={this.handleClose} severity={(this.props.severity) ? this.props.severity : "info"} elevation={6} variant="filled" sx={{width: "100%", maxWidth: "475px"}}>
                    {this.props.children}
                </MuiAlert>
            </Snackbar>
        );
    }
}

export default Alert;