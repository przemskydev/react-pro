import React, { useState, useContext } from 'react';

const WrapperContext = React.createContext({
  currentPage: 1,
  changePage: () => { }
});

const Page = ({ children, pageId }) => {
  const context = useContext(WrapperContext)

  return context.currentPage === pageId ? children : null
}

const Controls = () => {
  const context = useContext(WrapperContext)

  return (
    <div>
      <button className="button is-primary" onClick={() => context.changePage(context.currentPage - 1)}>Prev</button>
      <button className="button is-primary" onClick={() => context.changePage(context.currentPage + 1)}>Next</button>
      {/* <button>Submit</button> */}
    </div>
  )
}

const Wrapper = ({ children }) => {
  const [currentPage, setChangePage] = useState(1);

  const changePage = pageIndex => {
    setChangePage(pageIndex)
  }

  return (
    <div>
      <WrapperContext.Provider
        value={{
          currentPage,
          changePage
        }}>
        {children}
      </WrapperContext.Provider>
    </div>
  )
}

export { Page, Controls, Wrapper };