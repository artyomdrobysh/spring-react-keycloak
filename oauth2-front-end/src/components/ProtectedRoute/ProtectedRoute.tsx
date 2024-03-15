import React from "react";
import { Navigate } from "react-router-dom";

import useKeycloak from "@hooks/useKeycloak";

import { Props } from "./types";

export default function ProtectedRoute({ children }: Props) {
    const { keycloak } = useKeycloak();

    console.log(keycloak?.authenticated);

    return keycloak?.authenticated ? children : <Navigate to="/" />;
}
