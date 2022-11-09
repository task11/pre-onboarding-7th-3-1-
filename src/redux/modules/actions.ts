import { deprecated } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { SearchResultDataListProps } from '../../types/search';

const { createStandardAction } = deprecated;

export const GET_SEARCH_RESULTS = 'search/GET_SEARCH_RESULTS';
export const GET_SEARCH_RESULTS_SUCCESS = 'search/GET_SEARCH_RESULTS_SUCCESS';
export const GET_SEARCH_RESULTS_ERROR = 'search/GET_SEARCH_RESULTS_ERROR';

export const getSearchResults = createStandardAction(GET_SEARCH_RESULTS)();
export const getSearchResultsSuccess = createStandardAction(
  GET_SEARCH_RESULTS_SUCCESS,
)<SearchResultDataListProps>();
export const getSearchResultsError = createStandardAction(
  GET_SEARCH_RESULTS_ERROR,
)<AxiosError>();
