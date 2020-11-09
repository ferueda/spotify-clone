import React from 'react';
import styled from 'styled-components';

import PlaySvg from '../../assets/play-btn.svg';

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.playlistCard.bg};
  padding: 16px;
  width: 195px;
  height: 272px;
  border-radius: 4px;

  transition: 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.playlistCard.bgHover};
  }

  &:hover div#playIcon {
    opacity: 1;
    transform: translateY(-10px);
  }
`;

const AvatarContainer = styled.div`
  position: relative;
  color: ${({ theme }) => theme.color.mainGreen};
`;

const PlayWhiteBg = styled.div`
  position: absolute;
  display: inline-block;
  background-color: white;
  height: 30px;
  width: 30px;
  border-radius: 999px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PlayIcon = styled.img`
  position: relative;
  width: 40px;
  -webkit-box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.75);

  border-radius: 999px;

  &:hover {
    transform: scale(1.05);
  }
`;

const PlayIconContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 10px;
  opacity: 0;
  cursor: default;

  transition: 0.2s ease;
`;

const Avatar = styled.img`
  object-fit: contain;
  width: 100%;
  border-radius: 4px;
  -webkit-box-shadow: 0px 2px 15px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 2px 15px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 2px 15px 1px rgba(0, 0, 0, 0.5);
`;

const Name = styled.h4`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const Description = styled.p`
  margin-top: 4px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #b3b3b3;
  word-wrap: break-word;
`;

function PlaylistCard() {
  const caca = 'A daily selection of chill beats - perfect to help you relax & study 📚';

  const titl = 'lofi hip hop music - beats to relax/study to';

  return (
    <Container>
      <AvatarContainer>
        <Avatar
          src="https://mosaic.scdn.co/640/ab67616d0000b2730b51f8d91f3a21e8426361aeab67616d0000b27328a90d00a2819504364880e4ab67616d0000b2734665488d7256f5272fc9815eab67616d0000b273a729c9c3dec04b99d889c66f"
          alt=""
        />
        <PlayIconContainer id="playIcon">
          <PlayWhiteBg />
          <PlayIcon src={PlaySvg} alt="play song icon" />
        </PlayIconContainer>
      </AvatarContainer>
      <Name>{titl.length > 20 ? titl.slice(0, 21) + '...' : titl}</Name>
      <Description>{caca.length > 50 ? caca.slice(0, 50) + '...' : caca}</Description>
    </Container>
  );
}

export default PlaylistCard;
