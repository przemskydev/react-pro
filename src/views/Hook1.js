import React, { useState } from 'react';
import styles from './Hook1.module.scss';
import cx from 'classnames';

const HookOne = () => {
  const [inputContent, setInputContnet] = useState('');
  const [searchContent, setSearch] = useState('');
  const [itemList, setItemList] = useState([
    {
      id: 1,
      content: "Hey! Please add yout first note."
    }
  ]);

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleChange = (e) => {
    setInputContnet(e.target.value)
  }

  const handleAdd = () => {
    const newElement = {
      id: itemList.length + 1,
      content: inputContent
    }

    setItemList([
      ...itemList,
      newElement
    ])

  }

  const handleRemove = (id) => {
    const newItemsList = itemList.filter(item => item.id !== id);

    setItemList(newItemsList)
  }
 
  return (
    <div className={styles.wrapper}>

      <input
        placeholder='Search notes by context'
        autoComplete="off"
        className="input"
        name='search'
        type='text'
        value={searchContent}
        onChange={handleSearch}
      />

      <hr />
      <h1>Add Notes</h1>
      <input
        autoComplete="off"
        className="input"
        name='name'
        type='text'
        value={inputContent}
        onChange={handleChange}
      />

      <button
        className={cx('button is-primary', styles.button)}
        onClick={() => handleAdd()}>ADD</button>

      {
        itemList
          .filter(({ content }) => content.includes(searchContent))
          .map(({ id, content }) => (
            <div key={id} className={cx("notification is-info is-light", styles.item)}>
              <button className="delete" onClick={() => handleRemove(id)}></button>
              {
                content
              }
            </div>
          ))
      }

    </div>
  )
}

export default HookOne;

