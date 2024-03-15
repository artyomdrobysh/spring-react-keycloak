import { useContext } from "react";

import KeycloakContext, { Props } from "@context/Keycloak";

export default function useKeycloak(): Props {
    return useContext<Props>(KeycloakContext);
}
