import styled from 'styled-components';

const StyledSearchTitle = styled.h2`
  text-align: center;
  font-size: 34px;
  font-weight: 700;
  line-height: 54.4px;
  padding-bottom: 40px;
`;

export default function SearchTitle() {
  return (
    <StyledSearchTitle>
      국내 모든 임상시험 검색하고 <br />
      온라인으로 참여하기
    </StyledSearchTitle>
  );
}
