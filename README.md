# YOUniversity Front-End
Now that you've done some work on developing YOUniversity, let's start together with a common set of code for the new work that we'll do, today, with testing and middleware. You can find your code in the [hackreactor](https://github.com/hackreactor) organization at GitHub. The name of the repository will be the id of your cohort suffixed with `youniversity-frontend-update`

## High level goals of this project

* Explain how React consumes and uses middleware, in particular redux-thunk

## Tech
* [reactjs](https://reactjs.org/)
* [react-redux](https://redux.js.org/docs/basics/UsageWithReact.html)
* [react-router](https://github.com/ReactTraining/react-router)
* [react-router-redux](https://github.com/reactjs/react-router-redux)
* [react-bootstrap](https://react-bootstrap.github.io/)
* [lodash](https://lodash.com/)
* [axios](https://github.com/axios/axios)
* [redux-thunk](https://github.com/gaearon/redux-thunk)

## Project Setup

* Fork the repository from the [hackreactor](https://github.com/hackreactor) organization to your own GitHub account. The repository will have the following naming convention: `{your cohort id}-youniversity-frontend-update`.

* Clone the forked repository to your local machine

* Run `npm install` from the root of the project

* Run `npm start` from the root of the project to start the application in development mode

* Open http://localhost:3000 to view it in the browser.

## Project Requirements

Here's a list of files you will touch throughout this project. Note that they are not listed in any particular order. Once you've followed the commented instructions in each of the files,your version of YOUniversity will allow a person to register, log in/out, and maintain their information in YOUniversity.

* `src/components/Flash.js`
* `src/components/UserForm.js`
* `src/containers/Flash.js`
* `src/reducers/Ui.js`
* `src/actions/User.js`

### Normal Mode
Everyone is expected to complete normal mode. After complete a flash message should be displayed showing the status of login activities.

* The flash message should display the message type and related message
* The color of the Alert should reflect the message type (success/failure)
* Try to display a glphyicon that compliments the message

**API Credentials:** admin/password

Files touched in Normal Mode:

* `src/components/Flash.js`
* `src/containers/Flash.js`
* `src/reducers/Ui.js`

### Hard Mode
Hard mode should be completed only if Normal Mode has been completed. Hard mode is not required but is good practice to enforce the concepts from lecture. After complete a flash message should be displayed showing the status of user activities.

Files touched in Hard Mode:

* `src/components/UserForm.js`
* `src/actions/User.js`