import * as React from "react";
import {Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText} from "@mui/material";

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
                    This site requires cookies to function. Thus, use of this website constitues as consent to the privacy policy. You can read the privacy policy by clicking "Privacy Policy".
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <a href="/privacy" target="_blank" rel="noopener" style={{textDecoration: "none"}}><Button color="secondary">Privacy Policy</Button></a>
                <Button onClick={handleClose} color="secondary" autoFocus>Agree</Button>
            </DialogActions>
        </Dialog>
    );
}

export default CookieDialog;