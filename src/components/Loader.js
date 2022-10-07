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
            <h1 className="loader-code">102 Processing</h1>
            <p className="loader-message">The server has received and is processing the request, but no response is
                available yet,</p>
        </div>
    );
}

export default Loader;