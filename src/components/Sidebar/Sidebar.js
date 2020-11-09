import React from 'react';
import styled from 'styled-components';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const Container = styled.nav`
  height: 100vh;
  width: 260px;
  background-color: ${({ theme }) => theme.color.player.sidebarBg};
  color: ${({ theme }) => theme.color.player.text};
  padding: 14px 10px 0 10px;
`;

const LogoContainer = styled.div`
  height: 65px;
  color: ${({ theme }) => theme.color.lightGray};

  & > hr {
    border: 1px solid #282828;
    width: 90%;
    margin: 10px auto;
  }
`;

const Logo = styled.img`
  object-fit: contain;
  height: 100%;
  margin-right: auto;
`;

const Playlist = styled.strong`
  margin-left: 10px;
  padding: 5px;
  font-size: 12px;
`;

function Sidebar({ playlists }) {
  return (
    <Container>
      <LogoContainer>
        <a href="/">
          <Logo
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt="spotify logo"
          />
        </a>

        <SidebarOption title="Home" Icon={HomeIcon} />
        <SidebarOption title="Search" Icon={SearchIcon} />
        <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

        <br />

        <Playlist>PLAYLISTS</Playlist>

        <hr />

        {
          //CEATE NEW COMPONENT FOR PLAYLISTS ITEMS
        }
        {playlists?.items?.slice(0, 15).map((playlist) => (
          <SidebarOption key={playlist.id} title={playlist.name} />
        ))}
      </LogoContainer>
    </Container>
  );
}

export default Sidebar;
