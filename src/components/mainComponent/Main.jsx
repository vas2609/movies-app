/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import style from "./Main.module.css";
import { connect } from "react-redux";
import { getMove } from "../../store/action";
import Cards from "../card/Cards";
import PagInatgion from "./pagination/Pagination";

function Main(props) {
  let [currentPage, setCurrentPage] = useState(1);
  let [perPage] = useState(6);

  useEffect(() => {
    props.getMove();
  }, []);

 

  let indexOfLast = currentPage * perPage;
  let indexOfFrst = indexOfLast - perPage;
  let currentPost = props.move.slice(indexOfFrst, indexOfLast + currentPage);

  let result = currentPost.map((item) => {
    
    return (
      <div key={item.id} className={style.cards}>
        <Cards
        id={item.id}
          reating={item.rating}
          title={item.title}
          img={item.medium_cover_image}
        />
      </div>
    );
  });

  let pagination = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className={style.container}>{result}</div>
      <div className={style.pagination}>
        <PagInatgion
          currentPage={currentPage}
          totalPost={result.length}
          pagination={pagination}
        />
      </div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    move: state.move,
  };
};

let mapDispatchToProps = {
  getMove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
