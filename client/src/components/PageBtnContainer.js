import React from "react";
import { useAppContext } from "../context/appContext";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";

export const PageBtnContainer = () => {
  const { noOfPages, page, changePage } = useAppContext();
  const pages = Array.from({ length: noOfPages }, (_, index) => {
    return index + 1;
  });
  //   console.log(pages);

  const prevPage = () => {
    if (page === 1) return;
    changePage(page - 1);
  };
  const nextPage = () => {
    if (page === pages.length) return;
    changePage(page + 1);
  };
  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber, index) => {
          return (
            <button
              type="button"
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}
              key={index}
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};
