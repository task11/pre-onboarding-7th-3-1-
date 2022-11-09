import StyledSection from './Section.style';

interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return <StyledSection>{children}</StyledSection>;
}
