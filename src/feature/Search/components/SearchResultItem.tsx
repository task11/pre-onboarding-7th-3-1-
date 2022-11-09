import { Dispatch, SetStateAction } from 'react';
import Icons from '../../../components/Icons';
import {
  StyledIconWrapper,
  StyledMatchWord,
  StyledResultColumn,
} from './SearchResultList.style';

interface SearchResultProps {
  result: SearchDataProps;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

interface SearchDataProps {
  id: number;
  fullname: string;
  matchSickName: string;
  sickName: string;
}

export default function SearchResultItem({
  result,
  setSearchQuery,
}: SearchResultProps) {
  const { fullname, matchSickName, sickName } = result;

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <StyledResultColumn
      onClick={() => setSearchQuery(fullname)}
      onMouseDown={handleMouseDown}
    >
      <StyledIconWrapper>
        <Icons.Search />
      </StyledIconWrapper>
      <StyledMatchWord>{matchSickName}</StyledMatchWord>
      {sickName}
    </StyledResultColumn>
  );
}
