import React from "react";
import {ResponsiveContainer, PieChart, Pie, Cell} from "recharts";
import * as PropTypes from 'prop-types';
import * as Constants from "../../../resources/Constants";

/**
 * Component for the score chart.
 *
 * @param title
 * @param userScore
 * @returns {*}
 * @constructor
 */
export default function ScoreChart({title, userScore}) {
    return (
        <>
            <h2 className="score-title">{title}</h2>
            <div className="dashboard-graphs-charts-cards-score">
                <ResponsiveContainer width="100%" height="70%">
                    <PieChart className="dashboard-graphs-charts-cards-score-pie">
                        <Pie
                            data={userScore}
                            dataKey="value"
                            startAngle={210}
                            endAngle={-210}
                            innerRadius="90%"
                            outerRadius="105%"
                            cornerRadius="50%"
                        >
                            <Cell
                                fill="rgb(255, 1, 1)"
                            />
                            <Cell
                                fill="transparent"
                            />
                        </Pie>
                        <Pie
                            data={[{
                                name: "circle",
                                value: 1
                            }]}
                            dataKey="value"
                            startAngle={210}
                            endAngle={-210}
                            outerRadius="90%"
                            fill="white"
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className="dashboard-graphs-charts-cards-score-description">
                    <p className="dashboard-graphs-charts-cards-score-description-score">{userScore[0].value}%</p>
                    <p className="dashboard-graphs-charts-cards-score-description-text">{Constants.SCORE_TEXT}</p>
                </div>
            </div>
        </>
    )
}

/**
 * Typechecking with PropTypes.
 *
 * @type {{userScore: Requireable<any[]>, title: Requireable<string>}}
 */
ScoreChart.propTypes = {
    title: PropTypes.string,
    userScore: PropTypes.array
};