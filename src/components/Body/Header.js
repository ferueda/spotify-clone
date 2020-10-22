import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useStateContext } from '../../context/StateProvider';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const LeftHeader = styled.div`
  background-color: #fff;
  color: #282828;
  border-radius: 500px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 40px;
  margin-right: 20px;
  width: 100%;
  max-width: 400px;

  & > input {
    border: none;
    outline: none;
    padding: 6px 30px 6px 10px;
    width: 100%;
  }
`;

const RightHeader = styled.div`
  display: flex;
  align-items: center;
  background: #000;
  border-radius: 500px;
  padding-right: 15px;

  & > h4 {
    font-size: 14px;
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Header({ spotify }) {
  const [{ user }] = useStateContext();
  return (
    <Container>
      <LeftHeader>
        <SearchIcon fontSize="large" />
        <input placeholder="Search for Artists, Songs, or Podcasts" />
      </LeftHeader>
      <RightHeader>
        <Avatar src={user?.images[0]?.url} alt={`${user?.display_name} avatar`} />
        <h4>{user?.display_name}</h4>
      </RightHeader>
    </Container>
  );
}

export default Header;
