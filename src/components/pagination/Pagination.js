import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  const pageChange = (data) => {
    setPageNumber(data.selected +1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimentions = () => {
    setWidth(window.innerWidth);
  };

  // update pagination component to the current browser width.
  useEffect(() => {
    window.addEventListener("resize", updateDimentions);
    return () => window.removeEventListener("resize", updateDimentions);
  }, []);

  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate 
        className="pagination justify-content-center gap-4 my-4"
        forcePage={pageNumber === 1? 0 : pageNumber - 1}
        nextLabel="Next"
        nextclassNameName="btn btn-primary fs-5 next"
        previousLabel="Prev"
        previousclassNameName="btn btn-primary fs-5 prev"
        activeclassNameName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageclassNameName="page-item"
        pageLinkclassNameName="page-link"
        pageCount={info?.pages}
        onPageChange={pageChange}
      />
    </>
  )
}

export default Pagination