import React from "react";
import { useLoaderData } from "react-router-dom";

import styles from "./styles.module.scss";

export default function Clubs() {
    const { data: clubs } = useLoaderData() as { data: string[] };

    return (
        <div className={styles.clubs}>
            <h1>Famous football clubs</h1>
            <ul>
                {clubs.map((c) => (
                    <li key={c}>
                        <span>{c}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
