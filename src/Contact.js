import * as React from "react";
import {Button, Box, TextField} from "@mui/material";
import emailjs from "emailjs-com";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Alert from "./Alert";

// used to capitalize names accordingly
const capitalizeName = function(name) {
    return name.replace(/\b(\w)/g, s => s.toUpperCase());
};

// validate form inputs
const isValidName = (name) => {
    return name.length > 0;
};

const isValidEmail = (email) => {
    return email.length > 0 && /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase());
};

const isValidSubject = (subject) => {
    return subject.length > 0;
};

const isValidMessage = (message) => {
    return message.length > 0;
};

// renders the contact form
function Contact(props) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [token, setToken] = React.useState(null);
    const [focus, setFocus] = React.useState(false);

    const hCaptchaRef = React.useRef();
    const successAlert = React.useRef();
    const hCaptchaAlert = React.useRef();
    const errorAlert = React.useRef();

    const updateName = (event) => {
        setName(capitalizeName(event.target.value));
    };

    const updateEmail = (event) => {
        setEmail(event.target.value);
    };

    const updateSubject = (event) => {
        setSubject(event.target.value);
    };

    const updateMessage = (event) => {
        setMessage(event.target.value);
    };

    const updateHCaptcha = (token, _ekey) => {
        setToken(token);
    };

    // used to start validating inputs only after user focuses on form
    const focused = () => {
        setFocus(true);
    }

    const sendEmail = () => {
        // validate all inputs
        if (isValidName(name) && isValidEmail(email) && isValidSubject(subject) && isValidMessage(message)){
            // validate hCaptcha
            if (!token) {
                successAlert.current.handleClose();
                errorAlert.current.handleClose();
                hCaptchaAlert.current.handleClick();
                return;
            }

            const serviceId = "service_zfwvi2u";
            const templateId = "template_96sqobi";
            const userId = "user_iRYtDls6UYEITVqrIDh0M";
            const templateParams = {
                name: name,
                email: email,
                subject: subject,
                message: message,
                token: token,
            };

            // send email
            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => {
                    if (response) {
                        hCaptchaAlert.current.handleClose();
                        successAlert.current.handleClick();
                        setFocus(false);
                        setName("");
                        setEmail("");
                        setSubject("");
                        setMessage("");
                        setToken(null);
                        hCaptchaRef.current.resetCaptcha();
                    }
                })
                .then(error => {
                    if (error) {
                        hCaptchaAlert.current.handleClose();
                        errorAlert.current.handleClick();
                    }
                });
        }
    }

    return (
        <Box component="form" sx={{"& .MuiTextField-root": { m: 1, width: "95%", maxWidth: "60ch"}}}>
            <Alert ref={successAlert} severity="success">Email Sent Successfully</Alert>
            <Alert ref={hCaptchaAlert} severity="error">hCaptcha Failed</Alert>
            <Alert ref={errorAlert} severity="error">Error Sending Email</Alert>
            <TextField id="contactName" error={focus && !isValidName(name)} color="success" value={name} label="Name" variant="outlined" fullWidth onFocus={focused} onChange={updateName} />
            <br />
            <TextField id="contactEmail" error={focus && !isValidEmail(email)} color="success" value={email} label="Email" variant="outlined" fullWidth onFocus={focused} onChange={updateEmail} />
            <br />
            <TextField id="contactSubject" error={focus && !isValidSubject(subject)} color="success" value={subject} label="Subject" variant="outlined" fullWidth onFocus={focused} onChange={updateSubject} />
            <br />
            <TextField id="contactMessage" error={focus && !isValidMessage(message)} color="success" value={message} label="Message" variant="outlined" multiline rows={10} fullWidth onFocus={focused} onChange={updateMessage} />
            <br />
            <Box sx={{m: 1}}>
                <HCaptcha ref={hCaptchaRef} sitekey="c1298519-d625-4b52-ad09-dff27843d563" onVerify={updateHCaptcha} theme="dark" size="visible"/>
            </Box>
            <Button variant="outlined" color="warning" size="large" sx={{margin: 1, width: "95%", maxWidth: "350px"}} onFocus={focused} onClick={sendEmail}>Send Message</Button>
        </Box>
    );
}

export default Contact;