import React from "react";
import {Root, Routes} from "react-static";
import {CssBaseline} from "@mui/material";
import {createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material/styles";
import {Router} from "@reach/router";

function App() {
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

    return (
        <Root>
            <ThemeProvider theme={theme}>
                <div className="content" style={{padding: 0}}>
                    {/* allow lazy loading routes */}
                    <React.Suspense fallback={<CssBaseline />}>
                        <Router>
                            <Routes path="*" />
                        </Router>
                    </React.Suspense>
                </div>
            </ThemeProvider>
        </Root>
    );
}

export default App
