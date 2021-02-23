import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducers';
import ReduxThunk from 'redux-thunk';

import {fetchUsers} from './actions';

export const store = createStore(reducer, applyMiddleware(ReduxThunk));

// store.subscribe(() => {
//   console.log(store.getState());
// });
