class User {
    /**
     * Main class for the User model.
     *
     * @param firstName
     * @param lastName
     * @param calorieCount
     * @param proteinCount
     * @param carbohydrateCount
     * @param lipidCount
     */
    constructor(firstName, lastName, calorieCount, proteinCount, carbohydrateCount, lipidCount) {
        this.name = firstName;
        this.surname = lastName;
        this.calories = calorieCount;
        this.proteins = proteinCount;
        this.carbs = carbohydrateCount;
        this.fats = lipidCount;
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
}

export default User;