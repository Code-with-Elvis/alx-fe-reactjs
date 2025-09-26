import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  async function fetchUsers(newPage = 1, append = false) {
    try {
      setLoading(true);
      setError(null);

      const response = await fetchUserData({
        username,
        location,
        minRepos,
        page: newPage,
        perPage: 10,
      });

      setTotalCount(response.data.total_count);

      if (append) {
        setResults((prev) => [...prev, ...response.data.items]);
      } else {
        setResults(response.data.items);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setPage(1);
    await fetchUsers(1, false);
  }

  async function handleLoadMore() {
    const nextPage = page + 1;
    setPage(nextPage);
    await fetchUsers(nextPage, true);
  }

  return (
    <section className="search-section">
      <div className="container">
        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className="flex gap-2 mb-5 max-w-2xl mx-auto max-[840px]:flex-wrap"
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full py-2 px-3 text-sm border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-40 py-2 px-3 text-sm border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Min Repos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-28 py-2 px-3 text-sm border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 py-2 text-white px-8 rounded"
          >
            Search
          </button>
        </form>

        {/* Results */}
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}

        {!loading && !error && results.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
            {results.map((user) => (
              <div key={user.id} className="result">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  loading="lazy"
                  className="w-full h-48 object-cover rounded"
                />
                <div className="info px-2 py-1 text-sm">
                  <h2 className="font-bold capitalize">{user.login}</h2>
                  <p>{user.location}</p>
                  {/* <div className="stats">
                    <p>Repos: {user.public_repos}</p>
                  </div> */}
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline inline-block mt-2"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {!loading &&
          !error &&
          results.length > 0 &&
          results.length < totalCount && (
            <div className="text-center mt-6">
              <button
                onClick={handleLoadMore}
                className="bg-gray-700 text-white px-6 py-2 rounded"
              >
                Load More
              </button>
            </div>
          )}
      </div>
    </section>
  );
};

export default Search;
