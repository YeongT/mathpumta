import React from 'react';
import styled from 'styled-components';

const Icon = styled.h1``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoginButton = styled.button``;

const NavBar = () => {
  return (
    <ButtonWrapper>
      <Icon>Mathpumta</Icon>
      <LoginButton>login</LoginButton>
    </ButtonWrapper>
  );
};

export default NavBar;
