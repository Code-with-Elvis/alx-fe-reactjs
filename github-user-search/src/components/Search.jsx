import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!searchTerm) return;
    try {
      setLoading(true);
      setError(null);
      const response = await fetchUserData(searchTerm);
      setResult(response.data);
      //console.log(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("Looks like we cant find the user");
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="search-section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search GitHub users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && result && (
          <div className="result">
            <img src={result?.avatar_url} alt={result.login} />
            <div className="info">
              <h2>{result.name || result.login}</h2>
              <p>{result.bio}</p>

              <a
                href={result.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile on GitHub
              </a>

              <p>Location: {result.location || "Unknown"}</p>
              <p>Company: {result.company || "N/A"}</p>

              <div className="stats">
                <p>Followers: {result.followers}</p>
                <p>Following: {result.following}</p>
                <p>Repos: {result.public_repos}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Search;
