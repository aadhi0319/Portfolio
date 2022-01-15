import * as React from "react";
import {Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText} from "@mui/material";
import {Link} from "react-router-dom";

/**
 * informs the user of their consent to cookie usage. this is required in order
 * to maintain compliance with GDPR standards.
 */
function CookieDialog() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    // render the cookie dialog once at website load
    React.useEffect(() => {
        handleOpen();  
    }, []);

    return (
        <Dialog open={open} onClose={handleClose} scroll="paper">
            <DialogTitle>Cookie Notice</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    This site requires cookies to function. Thus, use of this website constitues as consent to the privacy policy. You can read the privacy policy by clicking "Learn More".
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Link to="/privacy" target="_blank" rel="noopener" style={{textDecoration: "none"}}><Button color="secondary">Learn More</Button></Link>
                <Button onClick={handleClose} color="secondary" autoFocus>Agree</Button>
            </DialogActions>
        </Dialog>
    );
}

export default CookieDialog;