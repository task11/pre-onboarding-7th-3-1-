import { combineReducers } from 'redux';

import search from './modules/reducer';

const rootReducer = combineReducers({
  search,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
