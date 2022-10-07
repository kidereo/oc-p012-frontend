import React from "react";
import * as PropTypes from 'prop-types';

/**
 * Component to render key data stats on the dashboard.
 *
 * @param image
 * @param count
 * @param unit
 * @param title
 * @returns {*}
 * @constructor
 */
function KeydataCard({image, count, unit, title}) {
    return (
        <div className="dashboard-graphs-keydata-card">
            <img src={image} alt={`${title} count`}
                 className="dashboard-graphs-keydata-card-image"/>
            <div className="dashboard-graphs-keydata-card-text">
                <p>{count} {unit}</p>
                <h2>{title}</h2>
            </div>
        </div>
    );
}

/**
 * Typechecking with PropTypes.
 *
 * @type {{image: Requireable<string>, unit: Requireable<string>, count: Requireable<number>, title: Requireable<string>}}
 */
KeydataCard.propTypes = {
    image: PropTypes.string,
    count: PropTypes.number,
    unit: PropTypes.string,
    title: PropTypes.string,
};

export default KeydataCard;