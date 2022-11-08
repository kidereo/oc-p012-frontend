## Project
012 - Développez un tableau de bord d'analytics avec React

## Path 
Développeur d'application - JavaScript React

## Main packages
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
Routing by [React Router](https://reactrouter.com/en/main).\
Charts by [Recharts](https://recharts.org/en-US/).\
Typechecking with [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html).

## Prerequisites
- [NodeJS (**version 12.18**)](https://nodejs.org/en/).
- [npm](https://www.npmjs.com/).

## Installation
### Backend
1. Clone the backend repository with
`git clone https://github.com/kidereo/oc-p012-backend.git`.
2. Use Terminal to navigate to your local repo folder. Once there, install dependencies with `npm install`.
3. Launch the backend with `npm run start`.
4. If all goes well, you should receive the console message `Magic happens on port 3003` and the backend will become available on `http://localhost:3003`. If anything goes wrong, start again.
5. At this point, you can use [Postman](https://www.postman.com/) to start sending requests to the SportSee API or launch the frontend for project visuals.

### Frontend
1. Clone the frontend repository with `git clone https://github.com/kidereo/oc-p012-frontend.git`.
2. Use Terminal to navigate to your local repo folder. Once there, install dependencies with `npm install`.
3. Launch the backend with `npm start`.
4. If all goes well, you should receive the console message `You can now view the project in the browser` and the dashboard will become available on `http://localhost:3000`. 
5. If anything goes wrong, start again.

## Use
1. Once everything is up and running, navigate to `http://localhost:3000/`.
2. You will see a 404 message. Do not be alarmed, this is by design as you have not selected a user yet.
3. Currently just two users exist, with ids `12` and `18`. To access their dashboards through the backend API navigate to either `http://localhost:3000/user/12` or `http://localhost:3000/user/18`. Note their names - Karl and Cecilia.
4. In addition, two users have been mocked locally in a `data.js` file. To access their dashboards navigate to either `http://localhost:3000/mock/12` or `http://localhost:3000/mock/18`. You should see stats for James and Teresa now.
5. Finally, to make switching between the API sourced and locally mocked users easier, icons on the left side menu have been assigned links as follows:
    - The `yoga` icon will display dashboard for API user `12` - Karl. 
    - The `swimming` icon will display dashboard for API user `18` - Cecilia.
    - The `bike` icon will display dashboard for mocked user `12` - James.
    - The `weight` icon will display dashboard for mocked user `18` - Teresa.
    - Any other id will display a 404 error page as the path would be referring to user ids which are not available on the backend or in the mock data file.

## Technical info
### Available endpoints
This project calls on four endpoints:
1. `http://localhost:3003/user/${userId}` - retrieves information from a user. This endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
2. `http://localhost:3003/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
3. `http://localhost:3003/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
4. `http://localhost:3003/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

### Examples of inner queries
- `http://localhost:3003/user/12/performance` - retrieves the performance of the user with id `12`.
- `http://localhost:3003/user/18/average-sessions` - retrieves data for the average session length graph of the user with id `18`.
