import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.lightGray};
  transition: 200ms color ease-in;

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

function SidebarOption({ title, Icon }) {
  return (
    <Container>
      {Icon ? (
        <IconContainer>
          <Icon />
        </IconContainer>
      ) : null}
      {Icon ? <h4>{title}</h4> : <Text>{title}</Text>}
    </Container>
  );
}

export default SidebarOption;
