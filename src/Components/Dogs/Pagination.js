import React from "react";
import styles from "./index.module.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.pageItem}>
            <button
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              className={styles.pageLink}
            >
              {number}{" "}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
