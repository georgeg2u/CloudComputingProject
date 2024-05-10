import React from "react";

const Pagination = ({itemsPerPage, totalItems, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number} className="mx-2">
            <a
              onClick={() => paginate(number)}
              href="#"
              className="text-white text-lg font-bold hover:bg-blue-600 px-4 py-2 rounded"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
