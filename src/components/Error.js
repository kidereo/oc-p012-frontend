import React from "react";

/**
 * Error component for when there are no defined routes.
 *
 * @returns {*}
 * @constructor
 */
export default function Error() {
    return (
        <div className="error">
            <h1 className="error-code">404 Not Found</h1>
            <p className="error-message">The server can not find the requested resource. </p>
        </div>
    );
}