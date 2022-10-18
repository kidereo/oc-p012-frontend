export default class SessionLength {
    /**
     * Main class for the SessionLength model.
     *
     * @param data
     */
    constructor(data) {
        this.averageSessionLength = data.sessions.map((session) => {
            return {
                /**
                 * Return day numbers converted to day names as labels.
                 */
                label: this.nameDay(session.day),
                ...session,
            };
        });
    }

    /**
     * Get session length.
     *
     * @returns {*}
     */
    get retrieveSessionLength() {
        return this.averageSessionLength;
    }

    /**
     * Convert day numbers into day names.
     *
     * @param day
     * @returns {string}
     */
    nameDay(day) {
        if (day === 1) return "L";
        if (day === 2) return "M";
        if (day === 3) return "M";
        if (day === 4) return "J";
        if (day === 5) return "V";
        if (day === 6) return "S";
        if (day === 7) return "D";
    };
}