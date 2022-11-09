import styled from 'styled-components';

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 500px;
  background-color: ${(props) => props.theme.bgColor};
  color: black;
`;

export default StyledSection;
