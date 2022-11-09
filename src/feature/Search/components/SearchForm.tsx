import styled from 'styled-components';

interface SearchFormProps {
  children: React.ReactNode;
}

const StyledSearchForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 80px 0px 160px 0px;
  background-color: ${(props) => props.theme.bgcolor.section};
`;

export default function SearchForm({ children }: SearchFormProps) {
  return <StyledSearchForm>{children}</StyledSearchForm>;
}
