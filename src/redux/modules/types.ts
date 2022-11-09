import { ActionType } from 'typesafe-actions';
import { SearchResultDataListProps } from '../../types/search';
import {
  getSearchResults,
  getSearchResultsSuccess,
  getSearchResultsError,
  deleteSearchResults,
} from './actions';

const actions = {
  getSearchResults,
  getSearchResultsSuccess,
  getSearchResultsError,
  deleteSearchResults,
};
export type SearchAction = ActionType<typeof actions>;

export type SearchResultState = {
  searchData: {
    loading: boolean;
    error: Error | null;
    data: SearchResultDataListProps | null;
  };
};
