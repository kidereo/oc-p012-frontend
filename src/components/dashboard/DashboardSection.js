import React, {useEffect, useState} from "react";
import {useParams, Navigate} from "react-router-dom/dist/index";
import {
    retrieveUserInfo,
    retrieveUserDailyActivity,
    retrieveUserAverageSessionLength,
    retrieveUserPerformance
} from "../../data/api";
import User from "../../resources/User";
import Loader from "../Loader";
import DashboardGreeting from "./DashboardGreeting";
import DashboardKeydataCard from "./DashboardKeydataCard";
import IconCalories from "../../assets/icon-calories.svg";
import IconProtein from "../../assets/icon-protein.svg";
import IconCarbs from "../../assets/icon-carbs.svg";
import IconFats from "../../assets/icon-fats.svg";
import ActivityChart from "./charts/ActivityChart";
import SessionLengthChart from "./charts/SessionLengthChart";
import PerformanceChart from "./charts/PerformanceChart";
import ScoreChart from "./charts/ScoreChart";
import * as Constants from "../../resources/Constants";

/**
 * Principal component for the Dashboard.js <section>.
 *
 * @returns {*}
 * @constructor
 */
export default function DashboardSection() {
    let {id} = useParams();
    let [currentUserInfo, setCurrentUserInfo] = useState({});
    let [currentUserDailyActivity, setCurrentUserDailyActivity] = useState({});
    let [currentUserAverageSessionLength, setCurrentUserAverageSessionLength] = useState({});
    let [currentUserPerformance, setCurrentUserPerformance] = useState({});
    let [isLoading, setLoading] = useState(true);

    /**
     * Composite side function to access the API with a user id and return their data.
     * Runs at reload and every change of the id prop.
     */
    useEffect(() => {
        async function accessAPI(id) {
            let currentUserData = await retrieveUserInfo(id);
            let currentUserDailyActivity = await retrieveUserDailyActivity(id);
            let currentUserAverageSessionLength = await retrieveUserAverageSessionLength(id);
            let currentUserPerformance = await retrieveUserPerformance(id);
            setCurrentUserInfo(currentUserData);
            setCurrentUserDailyActivity(currentUserDailyActivity);
            setCurrentUserAverageSessionLength(currentUserAverageSessionLength);
            setCurrentUserPerformance(currentUserPerformance);
            setLoading(false);
        }

        accessAPI(id);
    }, [id]);

    /**
     * Create a new user and send the API data to the User class for treatment.
     *
     * @type {boolean|User}
     */
    let currentUser = !isLoading && new User(currentUserInfo);

    /**
     * If there is no user found and accessAPI() is completed show the 404 error.
     */
    if (!currentUser.firstName && !isLoading) return <Navigate to="/error"/>;

    /**
     * If accessAPI() returns a user then display the dashboard content.
     */
    return (
        <div className="dashboard">
            {
                isLoading ? (<Loader/>) : (
                    <>
                        <div className="dashboard-greeting">
                            <DashboardGreeting name={currentUser.firstName}
                                               greeting={Constants.GREETING_TEXT}
                            />
                        </div>
                        <div className="dashboard-graphs">
                            <div className="dashboard-graphs-charts">
                                <div className="dashboard-graphs-charts-activity">
                                    <ActivityChart title="Activité quotidienne"
                                                   userDailyActivity={currentUserDailyActivity}
                                    />

                                </div>
                                <div className="dashboard-graphs-charts-cards">
                                    <SessionLengthChart
                                        title="Durée moyenne des sessions"
                                        userSessionLength={currentUserAverageSessionLength}
                                    />
                                    <PerformanceChart
                                        userPerformance={currentUserPerformance}
                                    />
                                    <ScoreChart
                                        title="Score"
                                        userScore={currentUser.percentageScore}
                                    />
                                </div>
                            </div>
                            <div className="dashboard-graphs-keydata">
                                <DashboardKeydataCard image={IconCalories}
                                                      count={currentUser.calorieCount}
                                                      unit="kCal"
                                                      title="Calories"
                                />
                                <DashboardKeydataCard image={IconProtein}
                                                      count={currentUser.proteinCount}
                                                      unit="g"
                                                      title="Proteines"
                                />
                                <DashboardKeydataCard image={IconCarbs}
                                                      count={currentUser.carbohydrateCount}
                                                      unit="g"
                                                      title="Glucides"
                                />
                                <DashboardKeydataCard image={IconFats}
                                                      count={currentUser.lipidCount}
                                                      unit="g"
                                                      title="Lipides"
                                />
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
}