import Posts from "./components/Posts";
import { usePostCtx } from "./context/PostContext";
import { useState } from "react";
import Pagination from "./components/Pagination";

function App() {
  const state = usePostCtx();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Get current post limit by postPerPage.
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = state?.posts?.slice(indexOfFirstPost, indexOfLastPost);

  // Change page.
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Blog</h1>
      <Posts posts={currentPosts} loading={state?.loading!} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={state?.posts?.length!}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
