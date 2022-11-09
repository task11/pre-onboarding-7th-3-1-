import { Dispatch, SetStateAction } from 'react';

import Icons from '../../../components/Icons';
import {
  ConvertSearchDataListProps,
  ConvertSearchDataProps,
} from '../../../types/convertSearchData';

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
  convertDataList: ConvertSearchDataListProps;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export default function SearchResultList({
  convertDataList,
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
        {!convertDataList.length ? (
          <StlyedWithoutResult>
            <span>검색 결과가 없습니다.</span>
          </StlyedWithoutResult>
        ) : (
          <>
            <div className="recommend-title">추천 검색어</div>
            {convertDataList.map((result: ConvertSearchDataProps) => (
              <SearchResultItem
                key={result.sickCd}
                result={result}
                setSearchQuery={setSearchQuery}
              />
            ))}
          </>
        )}
      </StyledResultWrapper>
    </StyledSearchResultList>
  );
}
