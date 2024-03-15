import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const App = React.lazy(() => import("@components/App"));

import KeycloakProvider from "@providers/KeycloakProvider";

import "./clear.css";
import "./styles.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <StrictMode>
        <KeycloakProvider>
            <App />
        </KeycloakProvider>
    </StrictMode>
);
