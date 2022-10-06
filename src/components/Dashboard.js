import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {retrieveUserInfo} from "../data/api";
import User from "../resources/User";
import Error from "../components/Error";
import Loader from "../components/Loader";

/**
 * Dashboard component in the <section>.
 *
 * @returns {*}
 * @constructor
 */
function Dashboard() {
    let {id} = useParams();
    let [getUserById, setGetUserById] = useState({});
    let [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetch(id) {
            let currentUser = await retrieveUserInfo(id);
            setGetUserById(currentUser);
            setIsLoading(false);
        }

        fetch(id);
    }, [id]);

    let currentUser = !isLoading
        ? new User(
            getUserById?.userInfos.firstName,
            getUserById?.userInfos.lastName,
            getUserById?.userInfos.age,
        )
        : "";

    return (
        <div className="dashboard">
            {/*If there is no user and loading is completed show 404*/}
            {
                !currentUser.firstName && !isLoading ? <Error/> : null
            }

            {/*Show a message while loading and display dashboard once the loading is done*/}
            {
                isLoading ? (<Loader/>) : (
                    <h1>{currentUser.firstName}</h1>
                )
            }
        </div>
    );
}

export default Dashboard;