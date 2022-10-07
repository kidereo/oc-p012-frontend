import React from "react";
import './css/normalize.css';
import './css/styles.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HorizontalNavigation from "./components/HorizontalNavigation";
import VerticalNavigation from "./components/VerticalNavigation";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";

/**
 * Structure and routes for the SportSee dashboard.
 *
 * @returns {*}
 * @constructor
 */
function Sportsee() {
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
                            <Route path="/user/:id" element={<Dashboard/>}/>
                            <Route path="*" element={<Error/>}/>
                        </Routes>
                    </section>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default Sportsee;
