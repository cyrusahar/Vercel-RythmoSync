// components/Footer.js
import styled from 'styled-components';

const Footer = () => (
  <StyledFooter>
    <Socials>
      <Icon href="https://twitter.com" target="_blank">Twitter</Icon>
      <Icon href="https://github.com" target="_blank">GitHub</Icon>
      <Icon href="https://discord.com" target="_blank">Discord</Icon>
    </Socials>
    <p>&copy; 2023 RhythmoSync</p>
  </StyledFooter>
);

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
`;

const Socials = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const Icon = styled.a`
  color: ${({ theme }) => theme.accent};
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
