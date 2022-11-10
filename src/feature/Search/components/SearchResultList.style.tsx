import styled from 'styled-components';

export const StyledSearchResultList = styled.div`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  box-sizing: inherit;

  z-index: 1;
`;

export const StyledResultWrapper = styled.div`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  box-sizing: inherit;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  flex-direction: column;
  display: flex;
  width: 100%;
  max-height: 400px;
  overflow-y: scroll;
  position: absolute;
  top: 100%;
  left: 0px;
  margin-top: 8px;
  padding-top: 24px;
  padding-bottom: 16px;
  box-shadow: rgba(30, 32, 37, 0.1) 0px 2px 10px;

  .recommend-title {
    color: rgb(106, 115, 123);
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.018em;
    line-height: 1.6;
    padding-left: 24px;
    padding-right: 24px;
    font-family: inherit;
  }
`;

export const StlyedWithoutResult = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledResultColumn = styled.div<{ isFocus?: boolean }>`
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: flex;
  padding: 8px 24px;
  cursor: pointer;
  word-break: break-all;

  background-color: ${(props) => props.isFocus && 'rgb(248, 249, 250)'};

  &:hover {
    background: rgb(248, 249, 250);
  }
`;

export const StyledIconWrapper = styled.div`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  cursor: pointer;
  word-break: break-all;
  box-sizing: inherit;
  color: rgb(167, 175, 183);
  align-self: flex-start;
  min-width: 16px;
  height: 16px;
  margin-top: 3px;
  margin-right: 12px;
`;

export const StyledMatchWord = styled.div`
  font-weight: 700;
`;
