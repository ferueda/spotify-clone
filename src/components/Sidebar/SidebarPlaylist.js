import React from 'react';
import styled from 'styled-components';

const Container = styled.li`
  display: flex;
  height: 32px;
  align-items: center;
  color: ${({ theme, selected }) => (selected ? '#fff' : theme.color.lightGray)};
  transition: 100ms color;
  background-color: ${({ selected }) => (selected ? '#282828' : 'inherit')};
  border-radius: 4px;
  margin-left: 13px;
  font-size: 14px;
  cursor: default;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.color.player.text};
  }
`;

function SidebarPlaylist({ title }) {
  return <Container>{title.length > 30 ? title.slice(0, 27) + '...' : title}</Container>;
}

export default SidebarPlaylist;
