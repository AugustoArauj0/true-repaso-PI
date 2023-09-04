import "./pagination.styles.css";

function Pagination({ page, total }) {
  const pageNumbers = [];

  for (let i = 1; i <= total; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={"pagination-div"}>
      {pageNumbers.map((pageNumber) => (
        <button className={"pagination-btn"} onClick={() => page(pageNumber)}>
          {pageNumber}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
