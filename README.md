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

- If browser window doesn't open automatically, navigate to 
  <http://localhost:3000> to view.

- Install Redux DevTools Chrome extension if desired.

- To use the Redux DevTool, either right click the page or open with
`Ctrl-Shift-I`

## React-Redux App Setup Instructions

- Navigate in terminal to the directory you want your repo created in.

- Run:
`npm i -g create-react-app`

- Run:
`create-react-app <app_name>`

- Navigate to the newly created directory:
`cd <app_name>`

- Install required dependancies by running:
`npm i --save redux react-redux redux-thunk`

- Create the following folders inside your project's src folder:

      /actions
      /reducers
      /store

- Inside the actions folder, create the file:
`testAction.js`

- Add the following to `testAction.js`:

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
    return createStore(testReducer,applyMiddleware(thunk));
  }
  ```

- To access the store from the rest of the application, the store
  must be passed passed to the Provider component by making the following
  changes to index.js:

```javascript
...

import { Provider } from 'react-redux'
import configureStore from './store';

...

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

...
```

## React-Redux App Test Instructions

- Connect the Redux store to the desired component (App.js) by adding the following:

```javascript
...

import { connect } from 'react-redux';

...

export default connect()(App);
```

- In order to test the Redux store inside App.js, an action must be imported, and the
  mapStateToProps function must be included:

```javscript
...

import {testAction} from './actions/testAction'

...

const mapStateToProps = state => ({
 ...state
})

...
```

- ajdfjas