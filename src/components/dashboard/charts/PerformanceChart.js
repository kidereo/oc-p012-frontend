import React from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';
import Performance from "../../../resources/Performance";
import * as PropTypes from 'prop-types';

/**
 * Component for the performance chart.
 *
 * @param userPerformance
 * @returns {*}
 * @constructor
 */
export default function PerformanceChart({userPerformance}) {
    let currentUserPerformance = new Performance(userPerformance)
    return (
        <div className="dashboard-graphs-charts-cards-performance">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    data={currentUserPerformance.retrievePerformance}
                    outerRadius="45%"
                >
                    <PolarGrid
                        radialLines={false}
                    />
                    <PolarAngleAxis
                        dataKey="label"
                        tick={{
                            fill: "rgb(255, 255, 255)",
                            fontSize: 12,
                            fontWeight: 500,
                        }}
                        dy={3}
                    />
                    <PolarRadiusAxis
                        tickCount={6}
                        axisLine={false}
                        tick={false}
                    />
                    <Radar dataKey="value"
                           fill="rgb(255, 1, 1)"
                           fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

/**
 * Typechecking with PropTypes.
 *
 * @type {{userPerformance: Requireable<object>}}
 */
PerformanceChart.propTypes = {
    userPerformance: PropTypes.object
};