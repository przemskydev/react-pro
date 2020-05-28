import React from 'react';
import styles from './ItemList.module.scss'
import cx from 'classnames';
import withCollapsed from '../../hoc/withCollapsed'

const items = [
  `1. Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
  `2. Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
  `3. Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
  `4. Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
  `5. Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
];

const ItemList = ({ toggle, isCollapsed }) => {
  const classList = cx(styles.list, {
    [styles.isCollapsed]: isCollapsed
  })

  return (
    <div>
      <button className="button is-link is-rounded" onClick={toggle}>Collapse</button>
      <p>State isCollapsed is: {isCollapsed.toString()}</p>

      <ul className={classList}>
        {items.map(item => (
          <li key={item} className='notification is-primary'>{item}</li>
        ))}
      </ul>

    </div>
  )
}

export default withCollapsed(ItemList);
