import { ThunkAction } from 'redux-thunk';
import { AxiosError } from 'axios';
import { RootState } from '../create';
import { requestSearchResults } from '../../api/sick';
import {
  getSearchResults,
  getSearchResultsSuccess,
  getSearchResultsError,
} from './actions';
import { SearchAction } from './types';

export function getSearchResultsThunk(
  query: string,
): ThunkAction<Promise<void>, RootState, null, SearchAction> {
  return async (dispatch) => {
    dispatch(getSearchResults());
    try {
      const searchData = await requestSearchResults(query);
      dispatch(getSearchResultsSuccess(searchData));
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(getSearchResultsError(e));
      }
    }
  };
}
