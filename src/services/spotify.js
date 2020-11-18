import { clientId } from '../utils/config';

const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:5001/spotify-clone-88dae/us-central1/api/auth/';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20',
)}&response_type=code&show_dialog=true`;

export function getTokenFromUrl() {
  const hash = window.location.hash;
  if (!hash) return null;

  console.log(hash);
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((acc, item) => {
      let parts = item.split('=');
      acc[parts[0]] = decodeURIComponent(parts[1]);
      return acc;
    }, {});
}
