import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  width: 200px;
  background-color: ${({ theme }) => theme.color.darkerGray};
  border-radius: 4px;
  padding: 0 5px;

  position: absolute;
  top: 50px;
  right: 0;

  -webkit-box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.75);

  z-index: 99999;
`;

const Option = styled.li`
  margin: 5px 0px;
  padding: 10px 10px;
  border-radius: 4px;
  font-weight: 100;

  cursor: default;

  &:hover {
    background-color: #3d3d3d;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #3d3d3d;
`;

function SettingsDropdown({ setIsDropdown, setToken, settingsButtonRef }) {
  const settingsDropDownRef = React.useRef(null);

  React.useEffect(() => {
    const handleOutsideClick = ({ target }) => {
      if (
        !settingsDropDownRef.current ||
        settingsDropDownRef.current.contains(target) ||
        settingsButtonRef.current.contains(target)
      ) {
        return;
      }

      setIsDropdown(false);
    };

    window.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('touchstart', handleOutsideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [setIsDropdown, settingsButtonRef]);

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <Container ref={settingsDropDownRef}>
      <Option>Account</Option>
      <Option>Profile</Option>
      <Divider />
      <Option role="button" onClick={handleLogout}>
        Log out
      </Option>
    </Container>
  );
}

export default SettingsDropdown;
