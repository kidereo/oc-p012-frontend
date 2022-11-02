import React, {useState} from "react";
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
    /**
     * Get data for the chart.
     *
     * @type {SessionLength}
     * @type {*}
     */
    let currentUserSessionLength = new SessionLength(userSessionLength);
    let chartData = currentUserSessionLength.retrieveSessionLength;

    /**
     * A set of functions to animate the chart's container and the graph line on hover.
     */

    /**
     * 1. Calculate percentage for the gradient colour
     * so that the line to the right of hovered datapoint can remain white
     * but the line to the left will become 50% opaque.
     *
     * 2. Reset line percentage back to 0.
     *
     * @param hoveredDataPoint
     */
    let [percentage, setPercentage] = useState(0);

    function calculateLinePercentage(hoveredDataPoint) {
        if (hoveredDataPoint && hoveredDataPoint.activePayload) {
            let hoveredPoint = hoveredDataPoint.activePayload[0].payload.label;
            let index = chartData.findIndex(item => item.label === hoveredPoint);
            let variable = ((chartData.length - index - 1) * 100) / (chartData.length - 1);
            setPercentage(100 - variable);
        }
    }

    function resetLinePercentage() {
        setPercentage(0);
    }

    /**
     * 1. Set chart's background to gray to the right of hovered datapoint.
     * 2. Reset chart's background back to red.
     *
     * @param event
     */
    function setBackground(event) {
        if (event.isTooltipActive) {
            let container = document.querySelector('.dashboard-graphs-charts-cards-session_length');
            let containerWidth = container.clientWidth;
            let mouseLocX = Math.round((event.activeCoordinate.x / containerWidth) * 100);
            container.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseLocX}%, rgba(225,0,0,1) ${mouseLocX}%, rgba(225,0,0,1) 100%)`;
        }
    }

    function resetBackground() {
        let container = document.querySelector('.dashboard-graphs-charts-cards-session_length');
        container.style.background = "rgba(255, 0, 0, 1)";
    }

    return (
        <div className="dashboard-graphs-charts-cards-session_length">
            <h2>{title}</h2>
            <ResponsiveContainer width="100%" height="70%">
                <LineChart
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 25,
                        left: 25,
                        bottom: 5,
                    }}
                    outerRadius="75%"
                    onMouseMove={function (event) {
                        setBackground(event);
                    }}
                    onMouseOver={calculateLinePercentage}
                    onMouseLeave={function () {
                        resetBackground();
                        resetLinePercentage();
                    }}
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
                            stroke: "rgba(255, 0, 0, 1)"
                        }}
                        position={{
                            y: 5
                        }}
                    />
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        //stroke="rgba(255, 255, 255, 0.5)"
                        stroke="url(#colourLine)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            stroke: "rgba(255,255,255, 0.5)",
                            strokeWidth: 3,
                            r: 4,
                            fill: "white"
                        }}
                    />
                    <defs>
                        <linearGradient id="colourLine" x1="0%" y1="0" x2="100%" y2="0">
                            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.5)"/>
                            <stop offset={`${percentage}%`} stopColor="rgba(255, 255, 255, 0.4)"/>
                            <stop offset={`${percentage}%`} stopColor="white"/>
                            <stop offset={`${100}%`} stopColor="white"/>
                        </linearGradient>
                    </defs>
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
            <div className="recharts-tooltip-wrapper-session-length">
                <div className="recharts-tooltip-wrapper-session-length_payload">
                    <p>{payload[0].value + " min"}</p>
                </div>
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