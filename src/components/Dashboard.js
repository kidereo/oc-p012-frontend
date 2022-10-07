import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {retrieveUserInfo} from "../data/api";
import User from "../resources/User";
import Error from "../components/Error";
import Loader from "../components/Loader";
import KeydataCard from "../components/KeydataCard";
import IconCalories from "../assets/icon-calories.svg";
import IconProtein from "../assets/icon-protein.svg";
import IconCarbs from "../assets/icon-carbs.svg";
import IconFats from "../assets/icon-fats.svg";

/**
 * Dashboard component in the <section>.
 *
 * @returns {*}
 * @constructor
 */
function Dashboard() {
    let {id} = useParams();
    let [currentUserById, setCurrentUserById] = useState({});
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        /**
         * Composite function to access the API with a user id and return their data.
         */
        async function accessAPI(id) {
            let currentUserInfo = await retrieveUserInfo(id);
            setCurrentUserById(currentUserInfo);
            setLoading(false);
        }

        accessAPI(id);
    }, [id]);

    let currentUser = !loading && new User(
        currentUserById?.userInfos.firstName,
        currentUserById?.userInfos.lastName,
        currentUserById?.keyData.calorieCount,
        currentUserById?.keyData.proteinCount,
        currentUserById?.keyData.carbohydrateCount,
        currentUserById?.keyData.lipidCount,
    );

    /**
     * If there is no user found and accessAPI() is completed show the 404 error component.
     */
    if (!currentUser.firstName && !loading) return <Error/>;

    /**
     * If accessAPI() returns a user display the dashboard content.
     */
    return (
        <div className="dashboard">
            {
                loading ? (<Loader/>) : (
                    <>
                        <div className="dashboard-greeting">
                            <h1>Bonjour <span>{currentUser.firstName}</span></h1>
                            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                        </div>

                        <div className="dashboard-graphs">
                            <div className="dashboard-graphs-charts">
                            </div>
                            <div className="dashboard-graphs-keydata">
                                <KeydataCard image={IconCalories} count={currentUser.calorieCount} unit="kCal"
                                             title="Calories"/>
                                <KeydataCard image={IconProtein} count={currentUser.proteinCount} unit="g"
                                             title="Proteines"/>
                                <KeydataCard image={IconCarbs} count={currentUser.carbohydrateCount} unit="g"
                                             title="Glucides"/>
                                <KeydataCard image={IconFats} count={currentUser.lipidCount} unit="g"
                                             title="Lipides"/>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default Dashboard;