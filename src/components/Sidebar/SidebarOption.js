import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  color: ${({ theme, selected }) => (selected ? '#fff' : theme.color.lightGray)};
  transition: 200ms color ease-in;
  background-color: ${({ selected }) => (selected ? '#282828' : 'inherit')};
  border-radius: 4px;

  &:hover {
    color: ${({ theme }) => theme.color.player.text};
  }
`;

const IconContainer = styled.div`
  padding: 0 10px;
`;

const Text = styled.p`
  margin-top: 10px;
  margin-left: 20px;
  font-size: 14px;
`;

function SidebarOption({ title, Icon, selected }) {
  return (
    <Container selected={selected}>
      {Icon ? (
        <IconContainer>
          <Icon />
        </IconContainer>
      ) : null}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <Text>{title.length > 30 ? title.slice(0, 27) + '...' : title}</Text>
      )}
    </Container>
  );
}

export default SidebarOption;
