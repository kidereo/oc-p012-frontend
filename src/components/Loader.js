import React from "react";

/**
 * Error component for when there are no defined routes.
 *
 * @returns {*}
 * @constructor
 */
function Loader() {
    return (
        <div className="loader">
            <h1 className="loader-code">Loading...</h1>
            <p className="loader-message">Good things come to those who wait!</p>
        </div>
    );
}

export default Loader;