import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #000;
  padding: 15px;
`;

const Logo = styled.li`
  display: inline;
  font-size: 24px;
  font-weight: bolder;
  margin: 10px 20px;
  color: #ccc;
`;

const NavLi = styled.li`
  display: inline;
  font-size: 20px;
  font-weight: bold;
  margin: 10px 20px;
  color: #ccc;
`;

const Navigation = () => {
  return (
    <Nav>
      <Logo>Sprintholic</Logo>
      <NavLi>Logout</NavLi>
    </Nav>
  );
};

export default Navigation;
