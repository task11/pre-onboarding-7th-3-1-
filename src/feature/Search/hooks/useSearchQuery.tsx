import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ActionType } from 'typesafe-actions';
import { getSearchResultsThunk, SearchAction } from '../../../redux/modules';

const ArrowDown = 'ArrowDown' as const;
const ArrowUp = 'ArrowUp' as const;
const Escape = 'Escape' as const;
const Enter = 'Enter' as const;

export default function useSearchQuery(initialState: string) {
  const [searchQuery, setSearchQuery] = useState(initialState);
  const [index, setIndex] = useState<number>(-2);
  const resultRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchQuery.length > 0) {
      if (event.key === ArrowDown) {
        setIndex(index + 1);
        if (resultRef.current?.childElementCount === index + 1) setIndex(0);
        return;
      }

      if (event.key === ArrowUp) {
        setIndex(index - 1);
        if (index <= 0) {
          setIndex(0);
        }
        return;
      }

      if (event.key === Escape) {
        setIndex(index - 1);
        return;
      }

      if (event.key === Enter) {
        setIndex(-1);
        setSearchQuery(resultRef.current?.childNodes[index]?.textContent || '');
        return;
      }
    }
  };

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
    resultRef,
    handleKeyDown,
    index,
  };
}
