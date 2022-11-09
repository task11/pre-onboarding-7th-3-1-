import { Outlet } from 'react-router-dom';

import StyledMainContainer from './Main.style';

import Section from '../Section/Section';

export default function Main() {
  return (
    <StyledMainContainer>
      <Section>
        <Outlet />
      </Section>
    </StyledMainContainer>
  );
}
