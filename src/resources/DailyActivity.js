export default class DailyActivity {
    /**
     * Main class for the DailyActivity model.
     *
     * @param data
     */
    constructor(data) {
        this.dailyActivity = data.sessions.map(session => {
            return {
                /**
                 * Return just the day of the month (not the full date) with session data.
                 */
                //label: session.day,
                label: new Date(session.day).getDate().toString(),
                ...session
            }
        })
    }

    /**
     * Get daily activity.
     *
     * @returns {*}
     */
    get retrieveDailyActivity() {
        return this.dailyActivity;
    }
}