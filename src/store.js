/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import myApp from './reducers'

import { createStore } from 'redux';

// Centralized application state
// For more information visit http://redux.js.org/


// const store = createStore((state = initialState, action) => {
//   // TODO: Add action handlers (aka "reducers")
//   switch (action.type) {
//     case 'COUNT':
//       return { ...state, count: (state.count) + 1 };
//     default:
//       return state;
//   }
// });
let store = createStore(myApp)
export default store;
