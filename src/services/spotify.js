import { clientId } from '../utils/config';

const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';

const REDIRECT_URI = 'http://localhost:5001/spotify-clone-88dae/us-central1/api/auth/';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const accessUrl = `${AUTH_ENDPOINT}?client_id=${clientId}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join(
  '%20',
)}&response_type=code&show_dialog=true`;

export function getTokenFromUrl() {
  const hash = window.location.hash;
  if (!hash) return null;

  return hash.split('token=')[1];
}
