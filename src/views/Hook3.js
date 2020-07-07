import React, { useRef } from 'react'

const style = {
  transition: "transform 1s ease-in-out",
  width: '100px',
  transformOrigin: '0% 50%',
  display: 'block'
}

const HookThree = () => {

  const myInputRef = useRef(null);

  const handleClick = () => {
    myInputRef.current.focus()
    myInputRef.current.style.transform = 'scaleX(2)'
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <input style={style} ref={myInputRef}/>
      <button onClick={handleClick}>Focus input</button>
    </div>
  )
}

export default HookThree