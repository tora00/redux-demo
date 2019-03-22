# redux-demo

Demonstrates the creation and functionality of a basic React-Redux application.

## How To Run The Demo

- Navigate in terminal to the directory you want the repo created in.
- Run:
`git clone https://github.com/mpusch88/redux-demo`
- Navigate to the newly created directory:
`cd <redux-demo>`
- Run:
`npm run start`
- If browser window doesn't open automatically, navigate to <http://localhost:3000> to view.
- Install Redux DevTools Chrome extension if desired.
- To use the Redux DevTool, either right click the page or open with
`Ctrl-Shift-I`

## React-Redux App Creation Instructions

- Navigate in terminal to the directory you want your repo created in.
- Run:
`npm i -g create-react-app`
- Run:
`create-react-app <app_name>`
- Navigate to the newly created directory:
`cd <app_name>`
- Install dependancies by running:
`npm i --save redux react-redux redux-thunk`
- Create the following folders inside your project: actions, components, reducers, and store
- Inside the actions folder, create the file:
`testAction.js`
- Add the following to testAction.js:

```javascript
  export const testAction = () => dispatch => {
  dispatch({
    type: 'TEST_ACTION',
    message: 'Hello SENG 513!'
  })
  }
  ```

- Inside the reducers folder, create the file:
`testReducer.js`
- Add the following to testReducer.js:

```javascript
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
```

- Inside the store folder, create the file:
`testStore.js`
- Add the following the testStore.js:

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

- If desired, create the following files in the component folder:
`First.js Seconds.js Third.js`
