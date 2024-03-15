import React, { lazy } from "react";
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";

import Layout from "@components/Layout";
import ProtectedRoute from "@components/ProtectedRoute";
import ErrorBoundary from "@components/ErrorBoundary";

const Home = lazy(() => import("@pages/Home"));
const Clubs = lazy(() => import("@pages/Football/Clubs"));

import { getFootballClubs } from "./route";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route errorElement={<ErrorBoundary />}>
            <Route element={<Home />} index />

            <Route path="football">
                <Route
                    loader={getFootballClubs}
                    path="clubs"
                    element={(
                        <ProtectedRoute>
                            <Clubs />
                        </ProtectedRoute>
                    )}
                />
            </Route>
        </Route>
    </Route>
));

export default function App() {
    return <RouterProvider router={router} fallbackElement={<h2>router loader...</h2>} />
}
