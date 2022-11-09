import { Dispatch, SetStateAction } from 'react';
import Icons from '../../../components/Icons';
import { ConvertSearchDataProps } from '../../../types/convertSearchData';
import {
  StyledIconWrapper,
  StyledMatchWord,
  StyledResultColumn,
} from './SearchResultList.style';

interface SearchResultProps {
  result: ConvertSearchDataProps;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export default function SearchResultItem({
  result,
  setSearchQuery,
}: SearchResultProps) {
  const { fullName, convertName } = result;

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <StyledResultColumn
      onClick={() => setSearchQuery(fullName)}
      onMouseDown={handleMouseDown}
    >
      <StyledIconWrapper>
        <Icons.Search />
      </StyledIconWrapper>
      <StyledMatchWord>{convertName}</StyledMatchWord>
    </StyledResultColumn>
  );
}
