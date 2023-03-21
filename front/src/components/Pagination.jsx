import { useEffect, useState } from 'react';

const Pagination = ({
  currentPage,
  itemsCountPerpage,
  totalItemsCount,
  pageRangeDisplayed,
  onChange,
}) => {
  const [paginationProps, setPaginationProps] = useState({
    totalPagesCount: 1,
    pageGroup: 1,
    lastIndexOfPageGroup: 1,
    firstNumber: 1,
    lastNumber: 1,
  });

  useEffect(() => {
    const totalPagesCount = Math.ceil(totalItemsCount / itemsCountPerpage);
    const pageGroup = Math.ceil(currentPage / 5) || 1;
    const lastIndexOfPageGroup = pageGroup * pageRangeDisplayed;

    const lastNumber =
      lastIndexOfPageGroup > totalPagesCount
        ? totalPagesCount
        : lastIndexOfPageGroup;

    const firstNumber =
      lastNumber - (pageRangeDisplayed - 1) < 1
        ? 1
        : lastIndexOfPageGroup - (pageRangeDisplayed - 1);

    setPaginationProps(prev => ({
      ...prev,
      totalPagesCount: totalPagesCount,
      pageGroup: pageGroup,
      firstNumber: firstNumber,
      lastNumber: lastNumber,
      lastIndexOfPageGroup: lastIndexOfPageGroup,
    }));
  }, [currentPage]);

  const pageSetup = () => {
    let arr = [];

    for (
      let i = paginationProps.firstNumber;
      i <= paginationProps.lastNumber;
      i++
    ) {
      arr.push(i);
    }
    const renderResult = arr.map((number, i) => (
      <li key={number}>
        <a
          aria-current={number === currentPage ? 'page' : null}
          className={
            number === currentPage
              ? `px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`
              : `px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`
          }
          onClick={e => {
            onChange(+e.target.innerHTML);
          }}
        >
          {number}
        </a>
      </li>
    ));
    return renderResult;
  };

  const prevHandler = e => {
    const isFirstGruop = paginationProps.pageGroup === 1 ? true : false;
    if (isFirstGruop) {
      alert('첫 페이지목록 입니다.');
      e.preventDefault();
      return;
    }

    const firstPageOfPrevGroup =
      (paginationProps.pageGroup - 1) * pageRangeDisplayed -
      (pageRangeDisplayed - 1);

    onChange(firstPageOfPrevGroup);
  };

  const nextHandler = e => {
    const isLastGroup =
      paginationProps.pageGroup * pageRangeDisplayed >=
      paginationProps.totalPagesCount
        ? true
        : false;
    if (isLastGroup) {
      alert('마지막 페이지목록입니다.');
      e.preventDefault();
      return;
    }
    const firstPageOfNextGroup =
      (paginationProps.pageGroup + 1) * pageRangeDisplayed -
      (pageRangeDisplayed - 1);

    onChange(firstPageOfNextGroup);
  };

  return (
    <nav
      className="  flex justify-center
    "
      aria-label="Page navigation example"
    >
      <ul className="inline-flex -space-x-px">
        <li>
          <a
            onClick={prevHandler}
            href="#"
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            이전
          </a>
        </li>
        {pageSetup()}
        <li>
          <a
            onClick={nextHandler}
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            다음
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
