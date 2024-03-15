import { AxiosError } from "axios";

import { getToken } from "@utils/auth";

import { backendApi } from "./base";

export function getClubs(): Promise<string[]> {
    const token = getToken();
    return backendApi
        .get<string[]>("/football/clubs", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(res => res.data)
        .catch((err: AxiosError) => {
            throw new Response(err.message, { status: err.response?.status })
        })
}
