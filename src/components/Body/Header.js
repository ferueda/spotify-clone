import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Avatar } from '@material-ui/core';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const LeftHeader = styled.div`
  display: flex;
  width: 100%;
`;

const SearchContainer = styled.div`
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

  min-width: 200px;

  & > h4 {
    font-size: 14px;
    margin-left: 10px;
    font-weight: 600;
  }
`;

const ArrowIconContainer = styled.button`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;

  background-color: #000;
  color: #fff;

  border: none;
  outline: none;

  border-radius: 100%;
  padding: 2px 8px;
  margin-right: 20px;

  cursor: pointer;
`;

function Header({ spotify, withSearch }) {
  const history = useHistory();
  const { user } = spotify;

  return (
    <Container>
      <LeftHeader>
        <ArrowIconContainer onClick={history.goBack}>
          <ArrowBackIosIcon fontSize="small" />
        </ArrowIconContainer>

        <ArrowIconContainer onClick={history.goForward}>
          <ArrowForwardIosIcon fontSize="small" />
        </ArrowIconContainer>

        {withSearch ? (
          <SearchContainer>
            <SearchIcon fontSize="large" />
            <input placeholder="Search for Artists, Songs, or Podcasts" autoFocus />
          </SearchContainer>
        ) : null}
      </LeftHeader>

      <RightHeader>
        <Avatar src={user?.images[0]?.url} alt={`${user?.display_name} avatar`} />
        <h4>{user?.display_name}</h4>
      </RightHeader>
    </Container>
  );
}

export default Header;
