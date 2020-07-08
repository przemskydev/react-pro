import React from 'react';

const Page = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

const Controls = () => {
  return (
    <div>
      <button>Prev</button>
      <button>Next</button>
      {/* <button>Submit</button> */}
    </div>
  )
}

const Wrapper = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export { Page, Controls, Wrapper };