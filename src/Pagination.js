import React from "react";
const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <>
        {pageNumber.map((number) => (
          <div className="pagenation">
            <a href="!#" onClick={() => paginate(number)}>
              Page{number}
            </a>
          </div>
        ))}
      </>
    </nav>
  );
};
export default Pagination;
