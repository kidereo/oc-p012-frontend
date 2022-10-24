export default class Performance {
    /**
     * Main class for the Performance model.
     *
     * @param data
     */
    constructor(data) {
        this.kind = data.kind;
        this.userPerformance = data.data.map((performance) => {
            /**
             * Return performance kind as labels with capitalised first letter.
             */
            let dataLabel = this.kind[performance.kind];
            return {
                label: dataLabel.charAt(0).toUpperCase() + dataLabel.slice(1),
                ...performance
            }
        })
    }

    /**
     * Get user performance.
     *
     * @returns {*}
     */
    get retrievePerformance() {
        return this.userPerformance;
    }
}