/**
 * Mapping class for the User model.
 */
class User {
    constructor(
        firstName,
        lastName,
        age
    ) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get age() {
        return this._age;
    }
}

export default User;