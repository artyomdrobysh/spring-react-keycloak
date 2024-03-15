import React from "react";
import { ErrorResponse, isRouteErrorResponse, useRouteError } from "react-router-dom";

import domesticCat from "@images/docmestic-cat.jpg";

import styles from "./styles.module.scss";

export default function ErrorBoundary() {
    const error = useRouteError();

    let message = "";

    if (isRouteErrorResponse(error)) {
        const { status, data } = error as ErrorResponse;
        switch (status) {
            case 401: {
                message = "You are not authenticated";
                break;
            }
            case 403: {
                message = "You have no access to this resource";
                break;
            }
        }
        if (status >= 500) {
            message = "Error on the server";
        }

        if (!message && data) {
            message = `Unknown error: ${data}`;
        }
    }
    if (!message) {
        message = `Unknown error: ${(error as { message: string }).message}`;
    }

    return (
        <div className={styles.container}>
            <p>{message}</p>
            <img src={domesticCat} alt="domestic cat" />
        </div>
    );
}
