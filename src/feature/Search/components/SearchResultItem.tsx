import Icons from '../../../components/Icons';
import {
  StyledIconWrapper,
  StyledMatchWord,
  StyledResultColumn,
} from './SearchResultList.style';

interface SearchResultProps {
  matchSickName: string;
  sickName: string;
}

export default function SearchResultItem({
  matchSickName,
  sickName,
}: SearchResultProps) {
  return (
    <StyledResultColumn>
      <StyledIconWrapper>
        <Icons.Search />
      </StyledIconWrapper>
      <StyledMatchWord>{matchSickName}</StyledMatchWord>
      {sickName}
    </StyledResultColumn>
  );
}
