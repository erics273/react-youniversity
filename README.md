# YOUniversity Front-End
This is the starting point of the front-end of the YOUniversity application. You should clone this repository for use in your work over the next few days. You can find your code in the [hackreactor](https://github.com/hackreactor) organization at GitHub. The name of the repository will be the id of your cohort suffixed with `youniversity-frontend`

## High level goals of this project
* Acquaint yourself with the principles that dictate the construction of a React application and to unify the concepts from the first day in a representative application.

* Understand the basic concepts related to Redux and how to construct the basic tools for managing state.

## Tech
* [reactjs](https://reactjs.org/)
* [react-redux](https://redux.js.org/docs/basics/UsageWithReact.html)
* [react-router](https://github.com/ReactTraining/react-router)
* [react-router-redux](https://github.com/reactjs/react-router-redux)
* [react-bootstrap](https://react-bootstrap.github.io/)
* [lodash](https://lodash.com/)
* [axios](https://github.com/axios/axios)

## Project Setup

* Fork the repository from the [hackreactor](https://github.com/hackreactor) organization to your own GitHub account. The repository will have the following naming convention: `{your cohort id}-youniversity-frontend.`

* Clone the forked repository to your local machine

* Run `npm install` from the root of the project

* Run `npm start` from the root of the project to start the application in development mode

* Open http://localhost:3000 to view it in the browser.

## Project Requirements

Here's a list of files you will touch throughout this project. Note that they are not listed in any particular order. Once you've followed the commented instructions in each of the files,your version of YOUniversity will allow a person to register, log in/out, and maintain their information in YOUniversity.

* `src/components/NavLogin.js`
* `src/components/UserForm.js`
* `src/containers/EditUser.js`
* `src/containers/NavLogin.js`
* `src/containers/Register.js`
* `src/reducers/Auth.js`
* `src/actions/Auth.js`
* `src/actions/User.js`

### Normal Mode
Everyone is expected to complete normal mode. After complete you should be able to login and logout using the provided "admin" user. On successful log, the users details should replace the login form in the UI.

**API Credentials:** admin/password

Files touched in Normal Mode:

* `src/components/NavLogin.js`
* `src/containers/NavLogin.js`
* `src/reducers/Auth.js`
* `src/actions/Auth.js`

### Hard Mode
Hard mode should be completed only if Normal Mode has been completed. Hard mode is not required but is good practice to enforce the concepts from lecture.

Files touched in Hard Mode:

* `src/components/UserForm.js`
* `src/containers/EditUser.js`
* `src/containers/Register.js`
* `src/actions/User.js`