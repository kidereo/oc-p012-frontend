import React from "react";
import './css/normalize.css';
import './css/styles.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HorizontalNavigation from "./components/HorizontalNavigation";
import VerticalNavigation from "./components/VerticalNavigation";

/**
 * Main file for the SportSee dashboard.
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
                        <h1>Bonjour Thomas</h1>
                    </section>
                </main>

            </BrowserRouter>
        </div>
    );
}

export default Sportsee;
