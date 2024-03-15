import keycloak from "./keycloak";

export function getToken() {
    const token = keycloak.token;
    if (!token) {
        throw new Response("", { status: 401 });
    }
    return token;
}
