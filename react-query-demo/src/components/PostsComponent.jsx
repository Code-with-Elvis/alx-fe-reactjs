import { useQuery } from "@tanstack/react-query";

const PostsComponent = () => {
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading)
    return (
      <section>
        <h1>Posts</h1>
        <p className="loading">Loading...</p>
      </section>
    );
  if (error)
    return (
      <section>
        <h1>Posts</h1>
        <p className="error">Error loading data.</p>
      </section>
    );

  return (
    <section>
      <h1>Posts</h1>
      <button onClick={() => window.location.reload()}>Refetch</button>
      <div className="posts">
        {data.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default PostsComponent;
