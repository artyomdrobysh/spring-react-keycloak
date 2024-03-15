import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Clubs() {
    const { data: clubs } = useLoaderData() as { data: string[] };

    return (
        <>
            <h1>Famous football clubs</h1>
            <ul>
                {clubs.map((c) => (
                    <li key={c}>
                        <span>{c}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}
