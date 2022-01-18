import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader"

// top level component
import App from "./App";

// export top level component as JSX (for static rendering)
export default App;

// render app (ensure this happens client side)
if (typeof document !== "undefined") {
    const target = document.getElementById("root");

    /**
     * was changed to fix an issue where wrong render was used in dev server
     * note that pre-rendering does not occur during development
     */
    const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;

    const render = Comp => {
        renderMethod(
            <AppContainer>
                <Comp />
            </AppContainer>,
            target
        );
    }

    // Render!
    render(App)

    // hot module replacement
    if (module && module.hot) {
        module.hot.accept('./App', () => {
            render(App)
        });
    }
}
