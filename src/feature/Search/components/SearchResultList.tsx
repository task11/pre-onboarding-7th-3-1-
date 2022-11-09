import { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import Icons from '../../../components/Icons';
import { RootState } from '../../../redux/create';
import SearchResultItem from './SearchResultItem';

import {
  StyledIconWrapper,
  StyledMatchWord,
  StyledResultColumn,
  StyledResultWrapper,
  StyledSearchResultList,
} from './SearchResultList.style';

interface SearchDataProps {
  id: number;
  fullname: string;
  matchSickName: string;
  sickName: string;
}

type SearchDataListProps = Array<SearchDataProps>;

const RESULT: SearchDataListProps = [
  {
    id: 1,
    fullname: '임파종대',
    matchSickName: '임',
    sickName: '파종대',
  },
  {
    id: 2,
    fullname: '임질',
    matchSickName: '임',
    sickName: '질',
  },
  {
    id: 3,
    fullname: '임신',
    matchSickName: '임',
    sickName: '신',
  },
];

interface SearchResultListProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export default function SearchResultList({
  searchQuery,
  setSearchQuery,
}: SearchResultListProps) {
  const searchData = useSelector((state: RootState) => state.search.searchData);
  console.log(searchData);

  return (
    <StyledSearchResultList>
      <StyledResultWrapper>
        {!!searchQuery && (
          <StyledResultColumn>
            <StyledIconWrapper>
              <Icons.Search />
            </StyledIconWrapper>
            <StyledMatchWord>{searchQuery}</StyledMatchWord>
          </StyledResultColumn>
        )}
        <div className="recommend-title">추천 검색어</div>
        {RESULT.map((result: SearchDataProps) => (
          <SearchResultItem
            key={result.id}
            result={result}
            setSearchQuery={setSearchQuery}
          />
        ))}
      </StyledResultWrapper>
    </StyledSearchResultList>
  );
}
