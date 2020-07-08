import React, { useContext } from 'react';

const MyContext = React.createContext();

const User = () => {
  const context = useContext(MyContext);

  return (
    <div>
      <p>My name iz: {context.name}</p>
    </div>
  )
}

const ContextComponent = () => (
  <div>
    <MyContext.Provider value={{ name: 'Brzemeg' }}>
      <h1>Hello World!</h1>
      <User />
    </MyContext.Provider>
  </div>
)

export default ContextComponent;