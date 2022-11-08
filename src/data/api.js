import * as CONSTANTS from "../resources/Constants";
import * as MOCK_DATA from "./data";

/**
 * Retrieve information of a given user.
 * This endpoint includes the user id, user information (first name, last name and age),
 * the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
 *
 * @param id
 * @param datasource
 * @returns {Promise<*>}
 */
export async function retrieveUserInfo(id, datasource) {
    return await buildEndpoint(id, datasource, CONSTANTS.USER_INFO_ENDPOINT);
}

/**
 * Retrieve daily activity of a given user.
 * This endpoint retrieves user sessions day by day with kilograms and calories.
 *
 * @param id
 * @param datasource
 * @returns {Promise<*>}
 */
export async function retrieveUserDailyActivity(id, datasource) {
    return await buildEndpoint(id, datasource, CONSTANTS.USER_DAILY_ACTIVITY_ENDPOINT);
}

/**
 * Retrieve average session duration of a given user.
 * This endpoint retrieves average session duration of a user per day.
 *
 * @param id
 * @param datasource
 * @returns {Promise<*>}
 */
export async function retrieveUserAverageSessionLength(id, datasource) {
    return await buildEndpoint(id, datasource, CONSTANTS.USER_AVERAGE_SESSION_LENGTH_ENDPOINT);
}

/**
 * Retrieve performance data of a given user.
 * This endpoint retrieves a user's performance (energy, endurance, etc).
 *
 * @param id
 * @param datasource
 * @returns {Promise<*>}
 */
export async function retrieveUserPerformance(id, datasource) {
    return await buildEndpoint(id, datasource, CONSTANTS.USER_PERFORMANCE_ENDPOINT);
}

/**
 * Build up endpoint URL to retrieve data.
 *
 * @param id
 * @param datasource
 * @param endpoint
 * @returns {Promise<*>}
 */
async function buildEndpoint(id, datasource, endpoint) {
    if (datasource === CONSTANTS.API_PATH) {
        try {
            const response = await fetch(`${CONSTANTS.BASE_URL}/${datasource}/${id}/${endpoint}`)
                .then(response => response.json());
            return response.data;
        } catch (error) {
            console.log(error);
        }
    } else {
        switch (endpoint) {
            case CONSTANTS.USER_INFO_ENDPOINT:
                return MOCK_DATA.USER_MAIN_DATA.find((user) => user.id === parseInt(id));
            case CONSTANTS.USER_DAILY_ACTIVITY_ENDPOINT:
                return MOCK_DATA.USER_ACTIVITY.find((user) => user.userId === parseInt(id));
            case CONSTANTS.USER_AVERAGE_SESSION_LENGTH_ENDPOINT:
                return MOCK_DATA.USER_AVERAGE_SESSIONS.find((user) => user.userId === parseInt(id));
            case CONSTANTS.USER_PERFORMANCE_ENDPOINT:
                return MOCK_DATA.USER_PERFORMANCE.find((user) => user.userId === parseInt(id));
            default:
                break;
        }
    }
}