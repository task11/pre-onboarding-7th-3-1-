import { ActionType } from 'typesafe-actions';
import { SearchResultDataListProps } from '../../types/search';
import {
  getSearchResults,
  getSearchResultsSuccess,
  getSearchResultsError,
} from './actions';

const actions = {
  getSearchResults,
  getSearchResultsSuccess,
  getSearchResultsError,
};
export type SearchAction = ActionType<typeof actions>;

export type SearchResultState = {
  searchData: {
    loading: boolean;
    error: Error | null;
    data: SearchResultDataListProps | null;
  };
};
