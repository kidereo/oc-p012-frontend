import React from "react";
import '../css/normalize.css';
import '../css/styles.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HorizontalNavigation from "../components/navigation/HorizontalNavigation";
import VerticalNavigation from "../components/navigation/VerticalNavigation";
import DashboardSection from "../components/dashboard/DashboardSection";
import Error from "../components/Error";

/**
 * Main page structure and routes for the SportSee dashboard.
 *
 * @returns {*}
 * @constructor
 */
export default function Dashboard() {
    return (
        <div className="body-container">
            <BrowserRouter>
                <header>
                    <HorizontalNavigation/>
                </header>
                <main>
                    <aside>
                        <VerticalNavigation/>
                    </aside>
                    <section>
                        <Routes>
                            <Route path="/user/:id" element={<DashboardSection/>}/>
                            <Route path="*" element={<Error/>}/>
                        </Routes>
                    </section>
                </main>
            </BrowserRouter>
        </div>
    );
}
