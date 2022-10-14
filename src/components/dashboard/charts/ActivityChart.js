import React from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import DailyActivity from "../../../resources/DailyActivity";
import * as PropTypes from 'prop-types';

/**
 * Component for the daily activity chart.
 *
 * @param userDailyActivity
 * @returns {*}
 * @constructor
 */
function ActivityChart({userDailyActivity}) {
    let currentUserActivity = new DailyActivity(userDailyActivity);
    return (
        <>
            <BarChart
                width={600}
                height={250}
                data={currentUserActivity.retrieveDailyActivity}
                margin={{
                    top: 15,
                    right: 0,
                    left: 25,
                    bottom: 15,
                }}
                barGap={8}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey="label"
                       tickMargin={15}
                       tickLine={false}
                       axisLine={{stroke: "rgba(222, 222, 222, 1)"}}
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
                    domain={["dataMin - 2", "dataMax + 2"]}
                />
                <Tooltip/>
                <Legend/>
                <Bar yAxisId="weight"
                     dataKey="kilogram"
                     fill="#282D30"
                     radius={[3, 3, 0, 0]}
                     barSize={7}
                />
                <Bar yAxisId="burn"
                     dataKey="calories"
                     fill="#E60000"
                     radius={[3, 3, 0, 0]}
                     barSize={7}
                />
            </BarChart>
        </>
    );
}

/**
 * Typechecking with PropTypes.
 *
 * @type {{userDailyActivity: Requireable<object>}}
 */
ActivityChart.propTypes = {
    userDailyActivity: PropTypes.object
};

export default ActivityChart;