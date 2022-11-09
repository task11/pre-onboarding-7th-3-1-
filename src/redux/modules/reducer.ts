import { createReducer } from 'typesafe-actions';
import { SearchAction, SearchResultState } from './types';
import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SEARCH_RESULTS_ERROR,
} from './actions';

const initialState: SearchResultState = {
  searchData: {
    loading: false,
    error: null,
    data: null,
  },
};

const search = createReducer<SearchResultState, SearchAction>(initialState, {
  [GET_SEARCH_RESULTS]: (state) => ({
    ...state,
    searchData: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [GET_SEARCH_RESULTS_SUCCESS]: (state, action) => ({
    ...state,
    searchData: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [GET_SEARCH_RESULTS_ERROR]: (state, action) => ({
    ...state,
    searchData: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export default search;
