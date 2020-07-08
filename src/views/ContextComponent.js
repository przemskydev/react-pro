import React from 'react';

const MyContext = React.createContext();

const User = () => {
  return (
    <MyContext.Consumer>
      {(context) => (
        <p>My name is: {context.name}</p>
      )}
    </MyContext.Consumer>
  )
}

const ContextComponent = () => (
  <div>
    <MyContext.Provider value={{ name: 'Brzemeg'}}>
      <h1>Hello World!</h1>
      <User />
    </MyContext.Provider>
  </div>
)

export default ContextComponent;