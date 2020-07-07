import React, { useRef, useEffect } from 'react'
import styles from './Hook3.module.scss';
import cx from 'classnames';
import gsap from 'gsap'

const HookThree = () => {

  const boxRef = useRef(null);

  useEffect(()=>{
    gsap.from(boxRef.current, {
      duration: 2,
      y: '100%',
      x: '-100%',
      opacity: 0,
    })
  })

  return (
    <div>
      <h1>Hello World!</h1>
      <div ref={boxRef} className={styles.box}/>
    </div>
  )
}

export default HookThree