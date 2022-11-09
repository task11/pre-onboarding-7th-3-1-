import { useState } from 'react';

export default function useSearchQuery(initialState: string) {
  const [searchQuery, setSearchQuery] = useState(initialState);

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
    console.log(searchQuery);
  };
  return {
    searchQuery,
    inputSearchHandler,
    handleMouseDown,
    inputClear,
    submitSearch,
  };
}
