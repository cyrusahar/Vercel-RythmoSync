// components/Header.js
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => (
  <StyledHeader>
    <Logo>RhythmoSync</Logo>
    <Nav>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/terms">Terms of Service</NavLink>
      <NavLink href="/privacy">Privacy Policy</NavLink>
    </Nav>
  </StyledHeader>
);

export default Header;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;
