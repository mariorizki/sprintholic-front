import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Background = styled.div`
  background: url('/assets/images/login-background.png') no-repeat center;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const FormContent = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  width: 500px;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-top: 30px;
  box-sizing: border-box;
  display: block;
  font-size: 20px;
  padding: 10px;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #fff;
  width: 100%;
  border-radius: 10px;
`;

const InputSubmit = styled.button`
  margin-top: 50px;
  padding: 15px;
  background: #6dcc84;
  border: none;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  width: 199px;
  transition: 0.5s;
  color: white;
  cursor: pointer;

  &:hover {
    background: hsla(145, 50%, 72%, 1);
  }
`;

const Login = () => {
  return (
    <Background>
      <form>
        <FormHeader>
          <img src="/assets/images/logo.png" alt="" />
        </FormHeader>

        <FormContent>
          <Input name="user" type="text" placeholder="username" />
          <Input name="password" type="password" placeholder="password" />
          <Link to="/dashboard">
            <InputSubmit>Login</InputSubmit>
          </Link>
        </FormContent>
      </form>
    </Background>
  );
};

export default Login;
