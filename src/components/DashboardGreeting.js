import React from "react";
import * as PropTypes from 'prop-types';

/**
 * A component used in the dashboard to display user name and greeting.
 *
 * @param name
 * @param greeting
 * @returns {*}
 * @constructor
 */
function DashboardGreeting({name, greeting}) {
    return (
        <>
            <h1>Bonjour <span>{name}</span></h1>
            <p>{greeting}</p>
        </>
    );
}

/**
 * Typechecking with PropTypes.
 *
 * @type {{greeting: Requireable<string>, name: Requireable<string>}}
 */
DashboardGreeting.propTypes = {
    name: PropTypes.string,
    greeting: PropTypes.string,
};

export default DashboardGreeting;