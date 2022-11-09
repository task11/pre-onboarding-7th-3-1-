import { Dispatch, SetStateAction } from 'react';

import Icons from '../../../components/Icons';
import {
  SearchResultDataListProps,
  SearchResultDataProps,
} from '../../../types/search';

import SearchResultItem from './SearchResultItem';

import {
  StlyedWithoutResult,
  StyledIconWrapper,
  StyledMatchWord,
  StyledResultColumn,
  StyledResultWrapper,
  StyledSearchResultList,
} from './SearchResultList.style';

interface SearchResultListProps {
  searchData: SearchResultDataListProps | null;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export default function SearchResultList({
  searchData,
  searchQuery,
  setSearchQuery,
}: SearchResultListProps) {
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
        {!searchData?.length ? (
          <StlyedWithoutResult>
            <span>검색 결과가 없습니다.</span>
          </StlyedWithoutResult>
        ) : (
          <>
            <div className="recommend-title">추천 검색어</div>
            {searchData.map((result: SearchResultDataProps) => (
              <SearchResultItem
                key={result.sickCd}
                result={result}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            ))}
          </>
        )}
      </StyledResultWrapper>
    </StyledSearchResultList>
  );
}
