import React from "react";
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import DailyActivity from "../../../resources/DailyActivity";
import * as PropTypes from 'prop-types';

/**
 * Component for the daily activit chart..
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
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="label"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="kilogram" fill="#282D30"/>
                <Bar dataKey="calories" fill="#E60000"/>
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