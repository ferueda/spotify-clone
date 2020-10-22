import React from 'react';
import styled from 'styled-components';

import { accessUrl } from '../services/spotify';

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: black;
`;

const Img = styled.img`
  width: 100%;
  max-width: 500px;
`;

const Link = styled.a`
  padding: 20px;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.color.darkGreen};
  font-weight: 800;
  color: white;
  transition-duration: 0.3s;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.mainGreen};
  }
`;

function Login() {
  return (
    <Container>
      <Img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
      />
      <Link href={accessUrl}>LOGIN WITH SPOTIFY</Link>
    </Container>
  );
}

export default Login;
