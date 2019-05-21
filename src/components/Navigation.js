import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #000;
  padding: 20px;
`;

const NavLi = styled.li`
  display: inline;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 20px;
  color: #ccc;
`;

const Navigation = () => {
  return (
    <Nav>
      <NavLi>Sprintholic</NavLi>
      <NavLi>Logout</NavLi>
    </Nav>
  );
};

export default Navigation;
