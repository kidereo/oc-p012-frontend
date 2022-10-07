import React from "react";

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

export default KeydataCard;