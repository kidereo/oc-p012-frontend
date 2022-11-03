import * as Constants from "../resources/Constants";

/**
 * Retrieve information of a given user.
 * This endpoint includes the user id, user information (first name, last name and age),
 * the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
 *
 * @param id
 * @returns {Promise<*>}
 */
export async function retrieveUserInfo(id) {
    return await buildEndpoint(id, Constants.USER_INFO_ENDPOINT);
}

/**
 * Retrieve daily activity of a given user.
 * This endpoint retrieves user sessions day by day with kilograms and calories.
 *
 * @param id
 * @returns {Promise<*>}
 */
export async function retrieveUserDailyActivity(id) {
    return await buildEndpoint(id, Constants.USER_DAILY_ACTIVITY_ENDPOINT);
}

/**
 * Retrieve average session duration of a given user.
 * This endpoint retrieves average session duration of a user per day.
 *
 * @param id
 * @returns {Promise<*>}
 */
export async function retrieveUserAverageSessionLength(id) {
    return await buildEndpoint(id, Constants.USER_AVERAGE_SESSION_LENGTH_ENDPOINT);
}

/**
 * Retrieve performance data of a given user.
 * This endpoint retrieves a user's performance (energy, endurance, etc).
 *
 * @param id
 * @returns {Promise<*>}
 */
export async function retrieveUserPerformance(id) {
    return await buildEndpoint(id, Constants.USER_PERFORMANCE_ENDPOINT);
}

/**
 * Build up endpoint URL to retrieve data.
 *
 * @param id
 * @param endpoint
 * @returns {Promise<*>}
 */
async function buildEndpoint(id, endpoint) {
    try {
        const response = await fetch(`${Constants.BASE_URL}/${id}/${endpoint}`)
            .then(response => response.json());
        return response.data;
    } catch (error) {
        console.log(error);
    }
}