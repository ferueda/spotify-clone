import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import * as ROUTES from '../../utils/routes';

import SidebarOption from './SidebarOption';
import SidebarPlaylist from './SidebarPlaylist';

const Container = styled.nav`
  height: calc(100vh - 65px);
  grid-area: sidebar;
  overflow-y: scroll;
  width: 232px;
  background-color: ${({ theme }) => theme.color.player.sidebarBg};
  color: ${({ theme }) => theme.color.player.text};
  padding: 14px 10px 0 10px;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.player.bodyBg};
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: ${({ theme }) => theme.color.player.bodyBg};
  }

  &::-webkit-scrollbar-thumb {
    padding: 1px;
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.3);
  }

  & a {
    text-decoration: none;
  }
`;

const LogoContainer = styled.div`
  height: 65px;
`;

const Logo = styled.img`
  object-fit: contain;
  height: 100%;
  margin-right: auto;
`;

const MenuContainer = styled.div`
  color: ${({ theme }) => theme.color.lightGray};

  & > hr {
    border: 1px solid #282828;
    width: 90%;
    margin: 10px auto;
  }
`;

const Playlist = styled.strong`
  margin-left: 10px;
  padding: 5px;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 1.4px;
`;

function Sidebar({ spotify }) {
  const { pathname } = useLocation();
  const [selected, setSelected] = React.useState(pathname);
  const { playlists } = spotify;

  React.useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

  return (
    <Container>
      <div>
        <LogoContainer>
          <a href="/">
            <Logo
              src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
              alt="spotify logo"
            />
          </a>
        </LogoContainer>

        <MenuContainer>
          <Link to={ROUTES.HOME}>
            <SidebarOption title="Home" Icon={HomeIcon} selected={selected === ROUTES.HOME} />
          </Link>

          <Link to={ROUTES.SEARCH}>
            <SidebarOption title="Search" Icon={SearchIcon} selected={selected === ROUTES.SEARCH} />
          </Link>

          <Link to={`${ROUTES.LIBRARY}/playlists`}>
            <SidebarOption
              title="Your Library"
              Icon={LibraryMusicIcon}
              selected={selected.includes(ROUTES.LIBRARY)}
            />
          </Link>

          <br />

          <Playlist>PLAYLISTS</Playlist>

          <hr />
        </MenuContainer>
      </div>
      {
        //CEATE NEW COMPONENT FOR PLAYLISTS ITEMS
      }
      {playlists?.map((playlist) => (
        <SidebarPlaylist key={playlist.id} title={playlist.name} />
      ))}
    </Container>
  );
}

export default Sidebar;
