import React from "react";

/**
 * Error component for when there are no defined routes.
 *
 * @returns {*}
 * @constructor
 */
function Error() {
    return (
        <div className="error">
            <h1 className="error-code">404</h1>
            <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
        </div>
    );
}

export default Error;