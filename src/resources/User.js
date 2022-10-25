export default class User {
    /**
     * Main class for the User model.
     *
     * @param firstName
     * @param lastName
     * @param calorieCount
     * @param proteinCount
     * @param carbohydrateCount
     * @param lipidCount
     * @param score
     */
    constructor(firstName, lastName, calorieCount, proteinCount, carbohydrateCount, lipidCount, score) {
        this.name = firstName;
        this.surname = lastName;
        this.calories = calorieCount;
        this.proteins = proteinCount;
        this.carbs = carbohydrateCount;
        this.fats = lipidCount;
        this.presentScore = score;
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