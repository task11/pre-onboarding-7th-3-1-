import { Dispatch, SetStateAction } from 'react';
import Icons from '../../../components/Icons';
import { SearchResultDataProps } from '../../../types/search';
import {
  StyledIconWrapper,
  StyledResultColumn,
} from './SearchResultList.style';

interface SearchResultProps {
  result: SearchResultDataProps;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  isFocus: boolean;
}

export default function SearchResultItem({
  result,
  searchQuery,
  setSearchQuery,
  isFocus,
}: SearchResultProps) {
  const { sickNm } = result;

  return (
    <StyledResultColumn
      onClick={() => setSearchQuery(sickNm)}
      isFocus={isFocus}
    >
      <StyledIconWrapper>
        <Icons.Search />
      </StyledIconWrapper>
      {sickNm.includes(searchQuery) ? (
        <>
          {sickNm.split(searchQuery)[0]}
          <span style={{ fontWeight: 'bold' }}>{searchQuery}</span>
          {sickNm.split(searchQuery)[1]}
        </>
      ) : (
        sickNm
      )}
    </StyledResultColumn>
  );
}
