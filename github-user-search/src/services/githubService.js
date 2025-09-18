import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

function searchUsers({ username, location, minRepos, page = 1, perPage = 10 }) {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  return axios.get(
    `${GITHUB_API_URL}/search/users?q=${query}&page=${page}&per_page=${perPage}`,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_API_KEY}`,
      },
    }
  );
}

export { searchUsers };
