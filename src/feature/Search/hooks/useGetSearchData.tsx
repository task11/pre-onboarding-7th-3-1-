import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/create';
import { deleteSearchResults } from '../../../redux/modules';

export default function useGetSearchData() {
  const { data } = useSelector((state: RootState) => state.search.searchData);
  const dispatch = useDispatch();

  const initDataList = useCallback((inputValue: string) => {
    if (inputValue === '') {
      dispatch(deleteSearchResults());
    }
  }, []);

  return { searchData: data, initDataList };
}
