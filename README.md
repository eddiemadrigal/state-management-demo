# What this app answers:

### What problem does the context API help solve?

Context API is React's state management system.  Data can be stored in a context object, which is then retrieved as needed from the context object itself.  This method removes the use of props, props lifting issues and props drilling.

### In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
 
- Actions are the responses taken as a result of requesting the modification of a state. An example would be the 'actions' taken by a customer at a donut shop.  The customer asks the counter person for a glazed donut.  In response to the customer's request, the counter person begins the process of removing a glazed donut from the display shelf.

- Reducers in Redux are in charge of making sure the Redux store remains current in spite of the changes being made. In our donut shop example, the reducer is the counter person.  If the counter person started out with 10 donuts at the beginning of the shift and an action is made to remove a single donut, the counter person know that there are now 9 glazed donuts remaining.  

- The Redux store holds the inventory of items that need to be tracked.  In a donut shop, the store would have donuts.  In a tire shop, the store would have an inventory of tires.  The Redux store maintains the current status of logged in users, first and last names, emails, and so forth.  As a result, the Redux store is the central place where all of the inventory is maintained - which is the reason it is referred to as the 'single source of truth.'

### What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state focuses on maintaining an inventory of state for the entire application.  In an application state, all states are centrally located in one store.  In contrast, component states are used to track the property of that one single component.  The difference between their use comes in how a particular state is used in an application.  For example, a user name would be an application state because the user would have access to all parts of the application.  His or her username would appear anywhere in the application.  A component state, in contrast, would not always be needed application wide.  An example of a component state is when need to show or hide paragraph on a particular page. If that paragraph is only relevent to that particular page, there would be no need to track it on an application scale.

### Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

- redux-thunk is middleware that allows the application to properly work with async requests.  By nature Redux is synchronous. Because of this we need to apply some middleware to extend the functionality of our Redux package to allow for things like, promises (which are asynchronous) to work properly. Promises are also handled properly with the installation of redux-thunk.  When action-creators are used, the redux-thunk, with it's asynchronous capability, allows the application run smoothly without interruption ... which then adds to a much better user experience.

### What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite React statement management system is Redux.  Redux seems to be a bit more sophisticated in how it handles the complexity of state management.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
