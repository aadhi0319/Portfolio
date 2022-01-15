import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Portfolio from "./Portfolio";
import Privacy from "./Privacy";

// the main router for the app
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Portfolio />} />
                <Route exact path="/privacy" element={<Privacy />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;