import React, { useState, useContext, useEffect } from 'react';

const WrapperContext = React.createContext({
  currentPage: 1,
  changePage: () => { },
  pageIds: [],
  updatePageNum: () => { }
});

const ProgressBar = () => {
  const context = useContext(WrapperContext)

  return (
    <progress className="progress" value={(context.currentPage / context.pageIds.length) * 100} max="100">15%</progress>
  )
}

const Page = ({ children, pageId }) => {
  const context = useContext(WrapperContext)

  useEffect(() => {
    context.updatePageNum(pageId)
  })

  return context.currentPage === pageId ? children : null
}

const Controls = () => {
  const context = useContext(WrapperContext)

  return (
    <div>
      <button
        className="button is-primary"
        onClick={() => context.changePage(context.currentPage - 1)}
        disabled={context.currentPage === 1}
      >
        Prev
      </button>
      <button
        className="button is-primary"
        onClick={() => context.changePage(context.currentPage + 1)}
        disabled={context.currentPage === context.pageIds.length}
      >
        Next
      </button>
      {
        context.currentPage === context.pageIds.length ? (
          <button className="button is-success"> Submit </button>
        ) : null
      }

      <p>{context.pageIds.length}</p>
    </div>
  )
}

const Wrapper = ({ children }) => {
  const [currentPage, setChangePage] = useState(1);
  const [pageIds, setPageId] = useState([])

  const changePage = pageIndex => {
    setChangePage(pageIndex)
  }

  const updatePageNum = pageId => {
    if (pageIds.includes(pageId)) {
      return
    }

    setPageId([...pageIds, pageId])
  }

  return (
    <div>
      <WrapperContext.Provider
        value={{
          currentPage,
          changePage,
          pageIds,
          updatePageNum
        }}>
        {children}
      </WrapperContext.Provider>
    </div>
  )
}

export { Page, ProgressBar, Controls, Wrapper };