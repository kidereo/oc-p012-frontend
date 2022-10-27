export default class User {
    /**
     * Main class for the User model.
     *
     * @param data
     */
    constructor(data) {
        this.name = data?.userInfos.firstName;
        this.surname = data?.userInfos.lastName;
        this.calories = data?.keyData.calorieCount;
        this.proteins = data?.keyData.proteinCount;
        this.carbs = data?.keyData.carbohydrateCount;
        this.fats = data?.keyData.lipidCount;
        this.presentScore = data?.score ? data.score : data?.todayScore;
    }

    /**
     * Getters for user attributes.
     *
     * @returns {*}
     */
    get firstName() {
        return this.name;
    }

    get lastName() {
        return this.surname;
    }

    get calorieCount() {
        return this.calories;
    }

    get proteinCount() {
        return this.proteins;
    }

    get carbohydrateCount() {
        return this.carbs;
    }

    get lipidCount() {
        return this.fats;
    }

    get score() {
        return this.presentScore
    }

    get percentageScore() {
        return this.scoreCalculation();
    }

    /**
     * Convert todayScore into array of actual/total percentage values.
     *
     * @returns {*[]}
     */
    scoreCalculation() {
        return [
            {key: "score", value: this.score * 100},
            {key: "total", value: 100 - this.score * 100}
        ]
    }
}