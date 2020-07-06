import React from 'react';
import styles from './ItemCollapsed.module.scss'
import cx from 'classnames';
import Collapse from '../../providers/Collapse'

const items = [
  `1. Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
  `2. Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
  `3. Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
  `4. Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
  `5. Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
];

const ItemList = () => {
  const classList = (isCollapsed) => cx(styles.list, {
    [styles.isCollapsed]: isCollapsed
  })

  return (
    <Collapse render={({ toggle, isCollapsed }) => (
      <div>
        <button className="button is-link is-rounded" onClick={toggle}>Collapse</button>
        <p>State isCollapsed is: {isCollapsed.toString()}</p>

        <ul className={classList(isCollapsed)}>
          {items.map(item => (
            <li key={item} className='notification is-primary'>{item}</li>
          ))} 
        </ul>

      </div>
    )} />
    
  )
}

export default ItemList;
