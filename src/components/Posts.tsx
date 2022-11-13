import { IPostState } from "../types/post.type";

export default function Posts({ posts, loading }: IPostState) {
  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <ul className="list-group mb-4">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            <h2>
              {post.id}. {post.title}
            </h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
