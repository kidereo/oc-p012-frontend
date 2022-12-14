import React from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import DailyActivity from "../../../resources/DailyActivity";
import * as PropTypes from 'prop-types';

/**
 * Component for the daily activity chart.
 *
 * @param title
 * @param userDailyActivity
 * @returns {*}
 * @constructor
 */
export default function ActivityChart({title, userDailyActivity}) {
    let currentUserActivity = new DailyActivity(userDailyActivity);
    return (
        <>
            <h2>{title}</h2>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart
                    data={currentUserActivity.retrieveDailyActivity}
                    margin={{
                        top: 15,
                        right: 0,
                        left: 25,
                        bottom: 15,
                    }}
                    barGap={8}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="label"
                        tickMargin={15}
                        tickLine={false}
                        tick={{
                            fontSize: 14,
                            fontWeight: 500
                        }}
                        axisLine={{
                            stroke: "rgba(222, 222, 222, 1)",
                            strokeWidth: 1
                        }}
                        padding={{
                            left: -20,
                            right: -20
                        }}
                    />
                    <YAxis
                        yAxisId="burn"
                        orientation="left"
                        hide={true}
                    />
                    <YAxis
                        yAxisId="weight"
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fontSize: 14,
                            fontWeight: 500
                        }}
                        tickMargin={20}
                        domain={[
                            "dataMin - 2",
                            "dataMax + 3"
                        ]}
                    />
                    <Tooltip
                        content={<CustomisedTooltip/>}
                        offset={50}
                        cursor={{
                            fill: "rgba(196, 196, 196, 0.5)"
                        }}
                        position={{
                            y: 5
                        }}
                    />
                    <Legend
                        payload={[
                            {
                                value: "Poids (kg)",
                                type: "circle",
                                color: "#282D30",
                            },
                            {
                                value: "Calories br??l??es (kCal)",
                                type: "circle",
                                color: "#E60000",
                            },
                        ]}
                        align="right"
                        verticalAlign="top"
                        iconSize={8}
                        wrapperStyle={{
                            top: -20,
                            right: 20
                        }}
                    />
                    <Bar
                        yAxisId="weight"
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[3, 3, 0, 0]}
                        barSize={7}
                    />
                    <Bar
                        yAxisId="burn"
                        dataKey="calories"
                        fill="#E60000"
                        radius={[3, 3, 0, 0]}
                        barSize={7}
                    />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
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
            <div className="recharts-tooltip-wrapper-activity">
                <p>{payload[0].value + " kg"}</p>
                <p>{payload[1].value + " kCal"}</p>
            </div>
        );
    }
}

/**
 * Typechecking with PropTypes.
 *
 * @type {{title: Requireable<string>, userDailyActivity: Requireable<object>}}
 */
ActivityChart.propTypes = {
    title: PropTypes.string,
    userDailyActivity: PropTypes.object
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