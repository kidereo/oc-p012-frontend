import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom/dist/index";
import {retrieveUserInfo, retrieveUserDailyActivity, retrieveUserAverageSessionLength} from "../../data/api";
import User from "../../resources/User";
import Error from "../Error";
import Loader from "../Loader";
import DashboardGreeting from "./DashboardGreeting";
import DashboardKeydataCard from "./DashboardKeydataCard";
import IconCalories from "../../assets/icon-calories.svg";
import IconProtein from "../../assets/icon-protein.svg";
import IconCarbs from "../../assets/icon-carbs.svg";
import IconFats from "../../assets/icon-fats.svg";
import ActivityChart from "./charts/ActivityChart";
import SessionLengthChart from "./charts/SessionLengthChart";

/**
 * Principal component for the Dashboard.js <section>.
 *
 * @returns {*}
 * @constructor
 */
function DashboardSection() {
    let {id} = useParams();
    let [currentUserId, setCurrentUserId] = useState({});
    let [currentUserDailyActivity, setCurrentUserDailyActivity] = useState({});
    let [currentUserAverageSessionLength, setCurrentUserAverageSessionLength] = useState({});
    let [isLoading, setLoading] = useState(true);

    /**
     * Composite side function to access the API with a user id and return their data.
     * Runs at reload and every change of the id prop.
     */
    useEffect(() => {
        async function accessAPI(id) {
            let currentUserInfo = await retrieveUserInfo(id);
            let currentUserDailyActivity = await retrieveUserDailyActivity(id);
            let currentUserAverageSessionLength = await retrieveUserAverageSessionLength(id);
            setCurrentUserId(currentUserInfo);
            setCurrentUserDailyActivity(currentUserDailyActivity);
            setCurrentUserAverageSessionLength(currentUserAverageSessionLength);
            setLoading(false);
        }

        accessAPI(id);
    }, [id]);

    /**
     * Create a new user and map API data to them as per the User class.
     *
     * @type {boolean|User}
     */
    let currentUser = !isLoading && new User(
        currentUserId?.userInfos.firstName,
        currentUserId?.userInfos.lastName,
        currentUserId?.keyData.calorieCount,
        currentUserId?.keyData.proteinCount,
        currentUserId?.keyData.carbohydrateCount,
        currentUserId?.keyData.lipidCount,
    );

    /**
     * If there is no user found and accessAPI() is completed show the 404 error component.
     */
    if (!currentUser.firstName && !isLoading) return <Error/>;

    /**
     * If accessAPI() returns a user display the dashboard content.
     */
    return (
        <div className="dashboard">
            {
                isLoading ? (<Loader/>) : (
                    <>
                        <div className="dashboard-greeting">
                            <DashboardGreeting name={currentUser.firstName}
                                               greeting="Félicitation ! Vous avez explosé vos objectifs hier 👏"
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
                                    <SessionLengthChart title="Durée moyenne des sessions"
                                                        userSessionLength={currentUserAverageSessionLength}
                                    />
                                    <SessionLengthChart title="Durée moyenne des sessions"
                                                        userSessionLength={currentUserAverageSessionLength}
                                    />
                                    <SessionLengthChart title="Durée moyenne des sessions"
                                                        userSessionLength={currentUserAverageSessionLength}
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

export default DashboardSection;