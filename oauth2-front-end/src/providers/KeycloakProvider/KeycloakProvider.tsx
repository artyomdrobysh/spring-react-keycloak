import React, { useEffect, useState } from "react";

import KeycloakContext from "@context/Keycloak";

import keycloak from "@utils/keycloak";

import { Props } from "./types";

let initStart = false;

export default function KeycloakProvider({ children }: Props) {
    const [ready, setReady] = useState<boolean>(false);

    useEffect(() => {
        if (!initStart) {
            initStart = true;
            keycloak.init({
                onLoad: "check-sso",
                pkceMethod: "S256",
                checkLoginIframe: false,
            })
                .then(() => {
                    setReady(true);
                });
        }
    }, []);

    return (
        <KeycloakContext.Provider value={{ keycloak }}>
            {ready ? children : (<h2>keycloak is initialized, please wait...</h2>)}
        </KeycloakContext.Provider>
    );
}
