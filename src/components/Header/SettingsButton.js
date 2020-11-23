import React from 'react';
import styled from 'styled-components';

import { Avatar } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme, isDropdown }) => (isDropdown ? theme.color.darkerGray : '#000')};
  border-radius: 500px;
  padding-right: 8px;
  min-width: 200px;

  transition: 0.1s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkerGray};
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DisplayName = styled.h4`
  font-size: 15px;
  margin-left: 10px;
  font-weight: 600;
`;

const SettingsButton = React.forwardRef(({ user, isDropdown, handleDropdown }, ref) => {
  const displayName =
    user?.display_name.length > 16 ? user?.display_name.slice(0, 14) + '...' : user?.display_name;

  return (
    <Container role="button" onClick={handleDropdown} isDropdown={isDropdown} ref={ref}>
      <LeftContainer>
        <Avatar src={user?.images[0]?.url} alt={`${user?.display_name} avatar`} />
        <DisplayName>{displayName}</DisplayName>
      </LeftContainer>

      <ArrowDropDownIcon />
    </Container>
  );
});

export default SettingsButton;
