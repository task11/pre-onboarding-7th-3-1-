import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ActionType } from 'typesafe-actions';
import { getSearchResultsThunk, SearchAction } from '../../../redux/modules';

export default function useSearchQuery(initialState: string) {
  const [searchQuery, setSearchQuery] = useState(initialState);

  const dispatch = useDispatch();

  const inputSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setSearchQuery(value);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const inputClear = () => {
    setSearchQuery('');
  };

  const submitSearch = () => {
    console.info(`${searchQuery} 을(를) 검색하였습니다.`);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (!searchQuery.trim()) {
        return;
      }
      dispatch<ActionType<SearchAction>>(getSearchResultsThunk(searchQuery));
    }, 500);
    return () => {
      clearTimeout(debounce);
    };
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    inputSearchHandler,
    handleMouseDown,
    inputClear,
    submitSearch,
  };
}
