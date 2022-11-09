import axios from 'axios';

import { SearchResultDataListProps } from '../types/search';

export async function requestSearchResults(query: string) {
  const response = await axios.get<SearchResultDataListProps>(
    `http://localhost:4000/sick?q=${query}`,
  );
  console.info('calling api');

  return response.data;
}
