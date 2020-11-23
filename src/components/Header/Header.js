import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SettingsButton from './SettingsButton';
import SettingsDropdown from './SettingsDropdown';

const Container = styled.div`
  display: flex;
  position: relative;
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
  padding: 2px 10px;
  margin-right: 20px;

  cursor: pointer;
`;

function Header({ spotify, withSearch }) {
  const [isDropdown, setIsDropdown] = React.useState(false);

  const history = useHistory();
  const { user } = spotify;

  React.useEffect(() => {
    return () => setIsDropdown(false);
  }, []);

  const settingsButtonRef = React.useRef(null);

  const handleDropdown = () => {
    setIsDropdown((current) => !current);
  };

  if (spotify.isLoading) {
    return null;
  }

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

      <SettingsButton
        isDropdown={isDropdown}
        user={user}
        handleDropdown={handleDropdown}
        ref={settingsButtonRef}
      />

      {isDropdown === true ? (
        <SettingsDropdown
          setIsDropdown={setIsDropdown}
          setToken={spotify.setToken}
          settingsButtonRef={settingsButtonRef}
        />
      ) : null}
    </Container>
  );
}

export default Header;
