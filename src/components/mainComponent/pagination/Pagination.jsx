import React from 'react';
import Styles from './Pagination.module.css';

function PagInatgion({ currentPage, totalPost, pagination }) {
  let pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPost - i); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumber.map((item, index) => {
          return (
            <span key={index}>
              <button
                className={Styles.button}
                onClick={() => pagination(item)}
                disabled={totalPost <= pageNumber.length}
              >
                {item}
              </button>
            </span>
          );
        })}
      </ul>
    </div>
  );
}

export default PagInatgion;