import * as React from "react";
import ReactDOM from "react-dom";
import {createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material/styles";
import App from "./App";

// configure the main theme (currently only supports dark mode)
const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#202020",
        },
        secondary: {
            main: "#ffd100",
        },
        background: {
            paper: "#333533",
            default: "#202020",
        }
    }
});

// ensure font sizes scale with screen size (mainly for mobile support)
const theme = responsiveFontSizes(darkTheme);

// render the main App with our theme
ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);