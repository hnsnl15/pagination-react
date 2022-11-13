export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
}: {
  postsPerPage: number;
  totalPosts: number;
  paginate: any;
}) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a href="!#" onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
      ;
    </nav>
  );
}
