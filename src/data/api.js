import * as Constants from "../resources/Constants";

/**
 * Retrieve information from a user.
 * This endpoint includes the user id, user information (first name, last name and age),
 * the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
 *
 * @param id
 * @returns {Promise<*>}
 */
async function retrieveUserInfo(id) {
    return await buildEndpoint(id, "");
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
        /*const response = await fetch(`${baseUrl}/${id}/${endpoint}`);
        const dataDump = await response.json();
        return dataDump.data;*/
    } catch (error) {
        console.log(error);
    }
}

export {retrieveUserInfo};