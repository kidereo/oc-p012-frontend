import React from "react";
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import SessionLength from "../../../resources/SessionLength";
import * as PropTypes from 'prop-types';

export default function SessionLengthChart({title, userSessionLength}) {
    let currentUserSessionLength = new SessionLength(userSessionLength);
    return (
        <div className="dashboard-graphs-charts-cards-session_length">
            <h2>{title}</h2>
            <LineChart
                width={150}
                height={120}
                data={currentUserSessionLength.retrieveSessionLength}
                margin={{
                    top: 5,
                    right: 5,
                    left: 25,
                    bottom: 5,
                }}
                outerRadius="75%"
            >
                <XAxis dataKey="label"
                       stroke="rgba(255, 255, 255, 0.5)"
                       axisLine={false}
                       dy={10}
                       tickLine={false}
                       tick={{
                           fontSize: 12,
                           fontWeight: 500,
                       }}
                />
                <YAxis
                    domain={[0, "dataMax + 20"]}
                    hide={true}
                />

                <Tooltip content={<CustomisedTooltip/>}
                         offset={5}
                />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="rgba(255, 255, 255, 0.5)"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                        stroke: "rgba(255,255,255, 1)",
                        strokeWidth: 1,
                        r: 5,
                    }}
                />
            </LineChart>
        </div>
    )
}

/**
 * Internal function to allow easier tooltip customisation.
 *
 * @param active
 * @param payload
 * @returns {*}
 * @constructor
 */
function CustomisedTooltip({active, payload}) {
    if (active) {
        return (
            <div className="recharts-tooltip-wrapper-session_length">
                <p>{payload[0].value + " min"}</p>
            </div>
        );
    }
}

/**
 * Typechecking with PropTypes.
 *
 * @type {{userDailyActivity: Requireable<object>}}
 */
SessionLengthChart.propTypes = {
    title: PropTypes.string,
    userSessionLength: PropTypes.object
};

/**
 * Typechecking with PropTypes.
 *
 * @type {{payload: Requireable<any[]>, active: Requireable<boolean>}}
 */
CustomisedTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
};
