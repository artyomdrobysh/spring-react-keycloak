import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

import useKeycloak from "@hooks/useKeycloak";

import styles from "./styles.module.scss";

export default function Layout() {
    const { keycloak } = useKeycloak();

    return (
        <>
            <header className={styles.header}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {keycloak?.authenticated && (
                            <li>
                                <Link to="football/clubs">Football clubs</Link>
                            </li>
                        )}
                    </ul>
                </nav>
                {keycloak && !keycloak.authenticated && (
                    <button type="button" onClick={() => keycloak.login()}>
                        Log In
                    </button>
                )}
                {keycloak?.authenticated && (
                    <button type="button" onClick={() => keycloak.logout()}>
                        Log Out
                    </button>
                )}
            </header>
            <main>
                <Suspense fallback={<h2>layout loader...</h2>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
}
