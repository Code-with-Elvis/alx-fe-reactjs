import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

function fetchUserData(username) {
  return axios.get(`${GITHUB_API_URL}/users/${username}`, {
    headers: {
      Authorization: `Bearer ${GITHUB_API_KEY}`,
    },
  });
}

export { fetchUserData };
