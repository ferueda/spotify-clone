const BASE_ENDPOINT = 'http://localhost:5001/spotify-clone-88dae/us-central1/api';

const ENDPOINTS = {
  getUser: '/spotify',
  auth: '/auth',
};

export async function getSpotify(token) {
  const url = `${BASE_ENDPOINT}${ENDPOINTS.getUser}?refresh_token=${token}`;

  const res = await fetch(url);
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw new Error(res.statusText);
  }
}
