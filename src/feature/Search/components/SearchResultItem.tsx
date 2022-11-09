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
}

export default function SearchResultItem({
  result,
  searchQuery,
  setSearchQuery,
}: SearchResultProps) {
  const { sickNm } = result;

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <StyledResultColumn
      onClick={() => setSearchQuery(sickNm)}
      onMouseDown={handleMouseDown}
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
