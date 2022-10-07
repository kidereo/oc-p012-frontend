/**
 * Mapping class for the User model.
 */
class User {
    constructor(
        firstName,
        lastName,
        calorieCount,
        proteinCount,
        carbohydrateCount,
        lipidCount
    ) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._calorieCount = calorieCount;
        this._proteinCount = proteinCount;
        this._carbohydrateCount = carbohydrateCount;
        this._lipidCount = lipidCount;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get calorieCount() {
        return this._calorieCount;
    }

    get proteinCount() {
        return this._proteinCount;
    }

    get carbohydrateCount() {
        return this._carbohydrateCount;
    }

    get lipidCount() {
        return this._lipidCount;
    }
}

export default User;