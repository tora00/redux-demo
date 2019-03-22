# redux-demo

Demonstrates the creation and functionality of a basic React-Redux application.

## How To Run The Demo

1. Navigate in terminal to the directory you want the repo created in.
2. Run:
`git clone https://github.com/mpusch88/redux-demo`
3. Navigate to the newly created directory:
`cd <redux-demo>`
4. Run:
`npm run start`
5. If browser window doesn't open automatically, navigate to <http://localhost:3000> to view.
6. Install Redux DevTools Chrome extension if desired.
7. To use the Redux DevTool, either right click the page or open with
`Ctrl-Shift-I`

## React-Redux App Creation Instructions

1. Navigate in terminal to the directory you want your repo created in.
2. Run:
`npm i -g create-react-app`
3. Run:
`create-react-app <app_name>`
4. Navigate to the newly created directory:
`cd <app_name>`
5. Install dependancies by running:
`npm i --save redux react-redux redux-thunk`
6. Create the following folders inside your project: actions, components, reducers, and store
7. Inside the actions folder, create the file:
`testAction.js`
8. Add the following to testAction.js:
  export const testAction = () => dispatch => {
  dispatch({
    type: 'TEST_ACTION',
    message: 'Hello SENG 513!'
  })
  }
9. Inside the reducers folder, create the file:
`testReducer.js`
10. Add the following to testReducer.js:
  export default (state = {}, action) => {
  switch (action.type) {
    case 'TEST_ACTION':
    return {
      message: action.message
    }
    default:
    return state
  }
  }
11. Inside the store folder, create the file:
`testStore.js`
12. Add the following the testStore.js:

```javascript
  import { createStore, applyMiddleware } from 'redux';
  import thunk from 'redux-thunk';
  import testReducer from '../reducers/testReducer';
  export default function configureStore() {
  return createStore(
    testReducer,
    applyMiddleware(thunk)
  );
  }
  ```

13. If desired, create the following files in the component folder:
`First.js Seconds.js Third.js`
14. test
