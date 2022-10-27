import React from "react";
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import SessionLength from "../../../resources/SessionLength";
import * as PropTypes from 'prop-types';

/**
 * Component for the average session length chart.
 *
 * @param title
 * @param userSessionLength
 * @returns {*}
 * @constructor
 */
export default function SessionLengthChart({title, userSessionLength}) {
    let currentUserSessionLength = new SessionLength(userSessionLength);
    return (
        <div className="dashboard-graphs-charts-cards-session_length">
            <h2>{title}</h2>
            <ResponsiveContainer width="100%" height="70%">
                <LineChart
                    data={currentUserSessionLength.retrieveSessionLength}
                    margin={{
                        top: 5,
                        right: 25,
                        left: 25,
                        bottom: 5,
                    }}
                    outerRadius="75%"
                >
                    <XAxis
                        dataKey="label"
                        stroke="rgba(255, 255, 255, 0.5)"
                        tickMargin={10}
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fontWeight: 500
                        }}
                        axisLine={false}
                    />
                    <YAxis
                        domain={[0, "dataMax + 20"]}
                        hide={true}
                    />
                    <Tooltip
                        content={<CustomisedTooltip/>}
                        offset={15}
                        cursor={{
                            //stroke: "rgba(255,255,255, 0.5)",
                            //strokeWidth: 0.5,
                            stroke: "rgba(0, 0, 0, 0.1)",
                            strokeWidth: 32,
                        }}
                        position={{
                            y: 5
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="rgba(255, 255, 255, 0.5)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            stroke: "rgba(255,255,255, 0.5)",
                            strokeWidth: 3,
                            r: 4,
                            fill: "white"
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
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