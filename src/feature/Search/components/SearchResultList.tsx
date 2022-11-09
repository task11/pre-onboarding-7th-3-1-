import Icons from '../../../components/Icons';
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
  matchSickName: string;
  sickName: string;
}

type SearchDataListProps = Array<SearchDataProps>;

const RESULT: SearchDataListProps = [
  {
    id: 1,
    matchSickName: '임',
    sickName: '파종대',
  },
  {
    id: 2,
    matchSickName: '임',
    sickName: '질',
  },
  {
    id: 3,
    matchSickName: '임',
    sickName: '신',
  },
];

interface SearchResultListProps {
  searchQuery: string;
}

export default function SearchResultList({
  searchQuery,
}: SearchResultListProps) {
  return (
    <StyledSearchResultList>
      <StyledResultWrapper>
        {!!searchQuery.length && (
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
            matchSickName={result.matchSickName}
            sickName={result.sickName}
          />
        ))}
      </StyledResultWrapper>
    </StyledSearchResultList>
  );
}
